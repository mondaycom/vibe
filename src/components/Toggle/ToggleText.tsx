import React, { FC } from "react";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";
import VibeComponentProps from "../../types/VibeComponentProps";

interface ToggleTextProps extends VibeComponentProps {
  children: string;
}

const ToggleText: FC<ToggleTextProps> = ({ children }) => (
  <span className={`${BASE_TOGGLE_CLASS_NAME}_text`}>{children}</span>
);
export default ToggleText;
