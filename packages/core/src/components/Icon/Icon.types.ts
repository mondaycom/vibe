import React from "react";
import { IconSubComponentProps } from "./Icon";

export type IconType = "svg" | "font" | "src";

// Custom type for all mouse event callbacks
export type MouseEventCallBack = (event: React.MouseEvent<HTMLElement | SVGElement>) => void;

export type SubIcon = string | React.FC<IconSubComponentProps> | null;
