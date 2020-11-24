import React, { forwardRef } from "react";
import MoonLoader from "react-spinners/MoonLoader";

import "./CircleLoader.scss";

const SIZES = {
  sm: 14,
  md: 16,
  lg: 30
};

const CircleLoader = forwardRef(({ size }, ref) => {
  return <MoonLoader ref={ref} size={SIZES[size]} color="inherit" />;
});

export default CircleLoader;
