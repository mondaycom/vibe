import React from "react";

const BASE_TOGGLE_CLASS_NAME = "monday-style-toggle";

const ToggleText = ({ children }) => <span className={`${BASE_TOGGLE_CLASS_NAME}_text`}>{children}</span>;
export default ToggleText;
