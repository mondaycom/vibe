import React from "react";
import "./corner-settings.scss";

interface CornersSettingsProps {
  children: React.ReactNode;
  title: string;
  bullets: string[];
  value?: string | number;
}

const CornersSettings = ({ children, title, bullets, value }: CornersSettingsProps) => {
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

export default CornersSettings;
