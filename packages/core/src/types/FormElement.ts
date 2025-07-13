/**
 * Props for form fields, including label, info text, and ID requirements for accessibility.
 * Using this type for a component's props will enforce that if a `label` or `infoText` is provided, an `id` must also be provided.
 * This is important for accessibility, to link the input with its label and description.
 * If there's a need, you can extend this type to add more shapes or conditions inside your form component types file.
 */
export type FormElementProps =
  | {
      /**
       * The label for the input.
       */
      label: string;
      /**
       * The id of the input.
       * Required when `label` or `infoText` is provided for accessibility reasons.
       */
      id: string;
      /**
       * Informational text to display below the input.
       */
      infoText?: string;
    }
  | {
      label?: never;
      /**
       * Informational text to display below the input.
       * If provided, an `id` is also required for accessibility.
       */
      infoText: string;
      /**
       * The id of the input.
       * Required when `infoText` or `label` is provided for accessibility reasons.
       */
      id: string;
    }
  | {
      label?: never;
      infoText?: never;
      /**
       * The id of the input.
       */
      id?: string;
    };
