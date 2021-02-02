import React from "react";
import "./GlobalSettingGeneralComponent.scss";

const GlobalSettingsGeneralComponent = ({ children, title, bullets, value }) => {
  return (
    <div className="global-settings-general-component">
      <div className="global-settings-child-container">{children}</div>
      <div className="global-settings-list">
        <div className="global-settings-list-header">{title}</div>
        {bullets.map(bullet => {
          return <div className="global-settings-list-item">{bullet}</div>;
        })}
      </div>
      {value && <div className="global-settings-general-component-value">{value}</div>}
    </div>
  );
};
GlobalSettingsGeneralComponent.propTypes = {};
GlobalSettingsGeneralComponent.defaultProps = {};
export default GlobalSettingsGeneralComponent;
