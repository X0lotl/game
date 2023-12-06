"use client";

import Player from '@/frontend/components/Player/Player';
import rawSteps from '@/config/video.config.json';
import { Step } from '@/types/config.typedefs';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Button from '@/frontend/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import { useGameContext } from '@/frontend/context/GameContext';
import ProgressBar from '@/frontend/components/ProgressBar/ProgressBar';
import { useSearchParams } from 'next/navigation';

const InProgressPage = () => {
  const searchParams = useSearchParams()

  const steps = rawSteps as Step[];

  const { changeXp, changeMoney } = useGameContext();

  const [isProgressVisible, setIsProgressVisible] = useState(true);

  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isLooping, setIsLooping] = useState(false);
  // const [count, setCount] = useState(0);

  const [hidePlayIcon, setIsPlayIconHidden] = useState(false);

  useEffect(() => {
    const stepID = searchParams?.get("id");

    if (stepID) {
      setCurrentStep(steps.find((step) => step.id === Number(stepID))!);
      setIsPlayIconHidden(searchParams.get("interacted") === "true")

      if(currentStep.end || currentStep.exam) {
        setIsLooping(false);
        return;
      }
    }
  }, [])

  useEffect(() => {
    if(currentStep.end || currentStep.exam) {
      setIsLooping(false);
      return;
    }

    if (!currentStep || currentStep.fatal) {
      setIsLooping(false);
    } else {
      setIsLooping(!currentStep.nextStepId);
    }
  }, [currentStep]);

  const handleEitherStep = useCallback(
    (stepId: number) => {
      const eitherStep = steps.find((step) => step.id === stepId);
      setCurrentStep(eitherStep!);
    },
    [steps]
  );

  const handleEnded = useCallback(() => {
    if (currentStep.exam) {
      location.replace('/exam-1');
      return;
    }

    if (currentStep.end) {
      location.replace("/success");
      return
    }

    if (currentStep.fatal) {
      location.replace(ROUTES.fail);
      return;
    }

    if (currentStep.money) {
      changeMoney(currentStep.money);
    }

    const { nextStepId } = currentStep;

    if (!nextStepId) {
      return;
    }

    const nextStep = steps.find((step) => (
      step.id === currentStep.nextStepId
    ));

    setCurrentStep(nextStep!);
  }, [changeMoney, changeXp, currentStep.money, currentStep.xp, currentStep, steps]);

  const resolveNextStep = useCallback(() => {
    const { nextStepId } = currentStep;

    if (!nextStepId) {
      return;
    }

    const nextStep = steps.find((step) => step.id === currentStep.nextStepId);

    setCurrentStep(nextStep!);
  }, [currentStep, steps]);

  const renderControl = useCallback(
    (stepId: number) => {
      const step = steps.find((step) => step.id === stepId);

      return (
        <Button
          title={step!.title}
          onClick={() => handleEitherStep(step!.id)}
        />
      );
    },
    [handleEitherStep, steps]
  );

  const handleAutoPlayError = () => {
    setIsPlayIconHidden(true)
  }

  return (
    <div>
      {isProgressVisible && (
        <div className="absolute top-0 right-0">
          <ProgressBar/>
        </div>
      )}

      <Player
        src={currentStep.src}
        onEnded={handleEnded}
        loop={isLooping}
        hidePlayIcon={hidePlayIcon}
        onAutoPlayError={handleAutoPlayError}
      />
      {currentStep.leftStepId && currentStep.rightStepId && (
        <div className="grid grid-cols-2 gap-x-4 mt-4">
          {renderControl(currentStep.leftStepId)}
          {renderControl(currentStep.rightStepId)}
        </div>
      )}
    </div>
  );
};

export default InProgressPage;
