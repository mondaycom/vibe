export interface UseWizardProps {
  initialStep?: number;
  stepCount: number;
  onStepChange?: (newStep: number, oldStep: number) => void;
  onComplete?: () => void;
}

export interface UseWizardReturnValue {
  activeStep: number;
  direction: WizardDirection;
  next: () => void;
  back: () => void;
  goToStep: (newStep: number) => void;
  canGoNext: boolean;
  canGoBack: boolean;
}

export type WizardDirection = "forward" | "backward";
