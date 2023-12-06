'use client';

import Player from '@/frontend/components/Player/Player';
import rawSteps from '@/config/video.config.json';
import { Step } from '@/types/config.typedefs';
import { FC, useCallback, useEffect, useState } from 'react';
import Button from '@/frontend/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
import { useGameContext } from '@/frontend/context/GameContext';
import ProgressBar from '@/frontend/components/ProgressBar/ProgressBar';

const InProgressPage: FC = () => {
  const steps = rawSteps as Step[];

  const { changeXp, changeMoney } = useGameContext();

  const [isProgressVisible, setIsProgressVisible] = useState(true);
  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (currentStep.end) {
      location.replace("/success");
    }

    if (!currentStep || currentStep.fatal) {
      setIsLooping(false);
    } else {
      setIsLooping(!currentStep.nextStepId);
    }
  }, [currentStep]);

  const handleEitherStep = useCallback((stepId: number) => {
    const eitherStep = steps.find((step) => (
      step.id === stepId
    ));

    setCurrentStep(eitherStep!);
  }, [steps]);

  const resolveFatality = useCallback(() => {
    if (currentStep.fatal) {
      setIsProgressVisible(false);
      location.replace(ROUTES.fail);
    }
  }, [currentStep.fatal]);

  const resolveXpAndMoney = useCallback(() => {
    if (currentStep.xp) {
      changeXp(currentStep.xp);
    }

    if (currentStep.money) {
      changeMoney(currentStep.money);
    }
  }, [changeMoney, changeXp, currentStep.money, currentStep.xp]);

  const resolveNextStep = useCallback(() => {
    const { nextStepId } = currentStep;

    if (!nextStepId) {
      return;
    }

    const nextStep = steps.find((step) => (
      step.id === currentStep.nextStepId
    ));

    setCurrentStep(nextStep!);
  }, [currentStep, steps]);

  const handleEnded = useCallback(() => {
    resolveFatality();
    resolveXpAndMoney();
    resolveNextStep();
  }, [resolveFatality, resolveXpAndMoney, resolveNextStep]);

  const renderControl = useCallback((stepId: number) => {
    const step = steps.find((step) => (
      step.id === stepId
    ));

    return (
      <Button
        title={step!.title}
        onClick={() => handleEitherStep(step!.id)}
      />
    );
  }, [handleEitherStep, steps]);

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
