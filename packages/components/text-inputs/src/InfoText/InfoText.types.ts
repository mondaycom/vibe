export interface InfoTextProps {
  /**
   * The ID of the associated form element for aria-describedby.
   */
  id: string;
  /**
   * The text content to display.
   */
  text: string;
  /**
   * If true, applies error styling to the info text.
   */
  error?: boolean;
  /**
   * If true, applies success styling to the info text.
   */
  success?: boolean;
  /**
   * If true, applies disabled styling to the info text.
   */
  disabled?: boolean;
  /**
   * If true, applies read-only styling to the info text.
   */
  readOnly?: boolean;
}
