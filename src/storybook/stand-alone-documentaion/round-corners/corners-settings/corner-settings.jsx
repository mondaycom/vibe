import React from "react";
import "./corner-settings.scss";

const CornersSettings = ({ children, title, bullets, value }) => {
  return (
    <div className="global-settings-general-component">
      <div className="global-settings-child-container">{children}</div>
      <div className="global-settings-list">
        <div className="global-settings-list-header">{title}</div>
        {bullets.map(bullet => {
          return (
            <div key={bullet} className="global-settings-list-item">
              {bullet}
            </div>
          );
        })}
      </div>
      {value && <div className="global-settings-general-component-value">{value}</div>}
    </div>
  );
};
CornersSettings.propTypes = {};
CornersSettings.defaultProps = {};
export default CornersSettings;
