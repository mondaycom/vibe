export interface UseWizardProps {
  initialStep?: number;
  stepCount: number;
  onStepChange?: (newStep: number, oldStep: number) => void;
  onFinish?: () => void;
}

export interface UseWizardReturnValue {
  activeStep: number;
  direction: WizardDirection;
  next: () => void;
  back: () => void;
  goToStep: (newStep: number) => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}

export type WizardDirection = "forward" | "backward";
