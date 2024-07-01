import React from "react";
import { VibeComponentProps } from "../../../types";

export interface TableContainerProps extends VibeComponentProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
}
