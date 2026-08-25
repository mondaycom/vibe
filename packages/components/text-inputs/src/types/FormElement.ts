export type FormElementProps =
  | {
      label: string;
      id: string;
      infoText?: string;
    }
  | {
      label?: never;
      infoText: string;
      id: string;
    }
  | {
      label?: never;
      infoText?: never;
      id?: string;
    };
