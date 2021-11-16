import React from "react";

const LinkComponent = ({ children, href }) => {
  const onClick = event => {
    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      event.stopPropagation();
      target.scrollIntoView();
    }
  };
  return (
    <a style={{ color: "var(--link-color)", textDecoration: "none" }} onClick={onClick} href={href}>
      {children}
    </a>
  );
};
LinkComponent.propTypes = {};
LinkComponent.defaultProps = {};
export default LinkComponent;
