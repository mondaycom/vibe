export interface NumberFieldSpinButtonProps {
  inputId?: string;
  onIncrement: (event: React.MouseEvent | React.KeyboardEvent) => void;
  onDecrement: (event: React.MouseEvent | React.KeyboardEvent) => void;
  size: "small" | "medium" | "large";
  disabled?: boolean;
  isAtMin?: boolean;
  isAtMax?: boolean;
}
