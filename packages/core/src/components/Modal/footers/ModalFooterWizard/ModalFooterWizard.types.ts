import { ModalFooterBaseProps } from "../ModalFooterBase/ModalFooterBase.types";
import { VibeComponentProps } from "../../../../types";

export interface ModalFooterWizardProps
  extends Required<Pick<ModalFooterBaseProps, "primaryButton" | "secondaryButton">>,
    VibeComponentProps {
  /**
   * The total number of steps in the wizard.
   * Renders the corresponding number of step indicators ("dots") in the footer.
   */
  stepCount: number;
  /**
   * The current active step (0-based index).
   * Highlights the corresponding step indicator ("dot") in the footer.
   */
  activeStep: number;
  /**
   * Callback fired when a step indicator ("dot") is clicked.
   */
  onStepClick: (stepIndex: number) => void;
}
