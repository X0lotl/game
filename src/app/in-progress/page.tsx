'use client';

import Player from '@/frontend/components/Player/Player';
import rawSteps from '@/config/video.config.json';
import { Step } from '@/types/config.typedefs';
import { FC, useCallback, useEffect, useState } from 'react';
import Button from '@/frontend/ui/Button/Button';
import { ROUTES } from '@/constants/routes';
// import { redirect } from 'next/dist/client/components/redirect';

const InProgressPage: FC = () => {
  const steps = rawSteps as Step[];

  const [currentStep, setCurrentStep] = useState(steps[0]);
  const [isLooping, setIsLooping] = useState(false);

  useEffect(() => {
    if (!currentStep || currentStep.fatal) {
      setIsLooping(false);
    } else {
      setIsLooping(!currentStep.nextStepId);
    }
  }, [currentStep]);

  const handleEitherStep = useCallback((stepId: number) => {
    console.log('stepId', stepId)
    const eitherStep = steps.find((step) => (
      step.id === stepId
    ));

    setCurrentStep(eitherStep!);
  }, [steps]);

  const handleEnded = useCallback(() => {
    if (currentStep.fatal) {
      location.replace(ROUTES.fail)
      return
    }

    const { nextStepId } = currentStep;

    if (!nextStepId) {
      return;
    }

    const nextStep = steps.find((step) => (
      step.id === currentStep.nextStepId
    ));

    setCurrentStep(nextStep!);
  }, [currentStep, steps]);

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
      <Player
        src={currentStep.src}
        onEnded={handleEnded}
        loop={isLooping}
      />

      {currentStep.leftStepId && currentStep.rightStepId && (
        <div className='grid grid-cols-2 gap-x-4 mt-4'>
          {renderControl(currentStep.leftStepId)}
          {renderControl(currentStep.rightStepId)}
        </div>
      )}
    </div>
  );
};

export default InProgressPage;
