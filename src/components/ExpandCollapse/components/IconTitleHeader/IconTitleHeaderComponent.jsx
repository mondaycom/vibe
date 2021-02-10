import React from "react";
import Icon from "../../../Icon/Icon";
import Email from "../../../Icon/Icons/components/Email";
import "./IconTitleHeader.scss";

const IconTitleHeaderComponent = (title, subText) => () => {
  return (
    <>
      <Icon iconType={Icon.type.SVG} icon={Email} iconSize={"52px"} tabindex="-1" clickable={true} />
      <div className="icon-title-header-container">
        <span className="icon-title-header-title">{title}</span>
        <span className="icon-title-header-sub-text">{subText}</span>
      </div>
    </>
  );
};

export default IconTitleHeaderComponent;
