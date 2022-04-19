import React from "react";

const LinkComponent = ({ children, href, target: originalTarget, rel }) => {
  const onClick = event => {
    if (originalTarget) {
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      event.preventDefault();
      event.stopPropagation();
      target.scrollIntoView?.();
    }
  };
  return (
    <a
      style={{ color: "var(--link-color)", textDecoration: "none" }}
      onClick={onClick}
      target={originalTarget}
      rel={rel}
      href={href}
    >
      {children}
    </a>
  );
};
LinkComponent.propTypes = {};
LinkComponent.defaultProps = {};
export default LinkComponent;
