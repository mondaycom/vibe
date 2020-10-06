import React from "react";
import Button from "./button";

import "./custom-icon-button.scss";

function renderIcon() {
  return (
    <span className="intro-banner-vdo-play-btn greenBg">
      <span className="ripple greenBg" />
      <span className="ripple greenBg" />
      <span className="ripple greenBg" />
    </span>
  );
}

export default function CustomIconButton() {
  const boardVideoCallText = "Custom";
  return (
    <Button
      className="custom-button"
      size="sm"
      outline={true}
      onClick={() => {}}
      icon={renderIcon}
      color="primary"
    >
      {boardVideoCallText}
    </Button>
  );
}
