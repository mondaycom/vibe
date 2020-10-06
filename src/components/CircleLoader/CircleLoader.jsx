import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

import "./CircleLoader.scss";

const SIZES = {
  sm: 14,
  md: 16,
  lg: 30
};

const CircleLoader = ({ size }) => {
  return <MoonLoader size={SIZES[size]} color="inherit" />;
};

export default CircleLoader;
