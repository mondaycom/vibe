export interface UseWizardProps {
  /**
   * The initial step index when the wizard starts.
   */
  initialStep?: number;
  /**
   * The total number of steps in the wizard.
   */
  stepCount: number;
  /**
   * Callback fired when the step changes.
   */
  onStepChange?: (newStep: number, oldStep: number) => void;
  /**
   * Callback fired when the wizard reaches the last step.
   */
  onFinish?: () => void;
}

export interface UseWizardReturnValue {
  /**
   * The index of the currently active step.
   */
  activeStep: number;
  /**
   * The direction of the step transition.
   */
  direction: WizardDirection;
  /**
   * Moves to the next step in the wizard.
   */
  next: () => void;
  /**
   * Moves to the previous step in the wizard.
   */
  back: () => void;
  /**
   * Moves to a specific step in the wizard.
   */
  goToStep: (newStep: number) => void;
  /**
   * If true, the current step is the first step.
   */
  isFirstStep: boolean;
  /**
   * If true, the current step is the last step.
   */
  isLastStep: boolean;
}

export type WizardDirection = "forward" | "backward";
