import { useCallback, useState } from "react";
import { UseWizardProps, UseWizardReturnValue, WizardDirection } from "./useWizard.types";

function useWizard({ initialStep = 0, stepCount, onStepChange, onFinish }: UseWizardProps): UseWizardReturnValue {
  const lastStep = stepCount - 1;
  const [activeStep, setActiveStep] = useState<number>(initialStep >= 0 && initialStep <= lastStep ? initialStep : 0);
  const [direction, setDirection] = useState<WizardDirection>();

  const isFirstStep = activeStep === 0;
  const isLastStep = activeStep === lastStep;

  const canGoNext = activeStep <= lastStep;
  const canGoBack = activeStep > 0;

  const goToStep = useCallback(
    (newStep: number) => {
      if (newStep < 0 || newStep >= stepCount) return;

      const oldStep = activeStep;
      setActiveStep(newStep);
      setDirection(newStep > oldStep ? "forward" : "backward");
      onStepChange?.(newStep, oldStep);
    },
    [stepCount, activeStep, onStepChange]
  );

  const next = useCallback(() => {
    if (!canGoNext) return;
    if (activeStep === lastStep) {
      onFinish?.();
      return;
    }
    goToStep(activeStep + 1);
  }, [canGoNext, activeStep, lastStep, goToStep, onFinish]);

  const back = useCallback(() => {
    if (!canGoBack) return;
    goToStep(activeStep - 1);
  }, [canGoBack, activeStep, goToStep]);

  return { activeStep, direction, next, back, goToStep, isFirstStep, isLastStep };
}

export default useWizard;
