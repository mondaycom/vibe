import React from "react";
import Avatar from "../../Avatar/Avatar";
import "./dropdown.stories.scss";

export const OptionRenderer = ({ src, type, size, name, position }) => {
  return (
    <div className="dropdown-stories-styles_inline-container">
      <Avatar size={size} src={src} type={type} key={name} />
      <span className="dropdown-stories-styles_name">
        {name}
        <span>{position}</span>
      </span>
    </div>
  );
};
