import React from "react";
import "./TestButton.css";

interface TestButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

// TODO storybook 7 migration: remove test component
export const TestButton = ({ primary = false, size = "medium", backgroundColor, label, ...props }: TestButtonProps) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
