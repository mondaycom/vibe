import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";
import { VibeComponentProps } from "../../../../types";

export interface ModalFooterWizardProps
  extends Required<Pick<ModalFooterBaseProps, "primaryButton" | "secondaryButton">>,
    VibeComponentProps {
  /**
   * Total number of steps in the wizard.
   * This would render the appropriate number of step indicators ("dots") in the footer.
   */
  stepCount: number;
  /**
   * Current active step (0-based index).
   * This would highlight the corresponding step indicator ("dot") in the footer.
   */
  activeStep: number;
  /**
   * Callback fired when a step indicator ("dot") is clicked.
   */
  onStepClick: (stepIndex: number) => void;
}
