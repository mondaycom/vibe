import React from "react";

const NotificationLink = ({ href, children }) => {
  return (
    <a href={href} style={{ color: "inherit" }}>
      {children}
    </a>
  );
};

export default NotificationLink;
