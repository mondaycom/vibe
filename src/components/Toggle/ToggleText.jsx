import React from "react";
import { BASE_TOGGLE_CLASS_NAME } from "./ToggleConstants";

const ToggleText = ({ children }) => <span className={`${BASE_TOGGLE_CLASS_NAME}__text`}>{children}</span>;
export default ToggleText;
