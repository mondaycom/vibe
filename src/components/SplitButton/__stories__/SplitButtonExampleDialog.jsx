/* eslint-disable prettier/prettier */
import React from "react";
import { Check } from "../../Icon/Icons";
import Icon from "../../Icon/Icon";
import "./splitButton.stories.scss";

const SplitButtonExampleOption = ({ option }) => {
  const icon = option.icon;
  const text = option.text;

  return (
    <div className="monday-storybook-split-button_dialog_option">
      {icon ? (
        <Icon
          iconType={Icon.type.ICON_FONT}
          clickable={false}
          icon={icon}
          className="monday-storybook-split-button_dialog_icon-spacing"
          iconSize={20}
          ignoreFocusStyle
        />
      ) : null}
      {text}
    </div>
  );
};

const SplitButtonExampleDialog = ({ options = [{ icon: Check, text: 'Hey' }] }) => {
  return (
    <div className="monday-storybook-split-button_dialog">
      {!options
        ? <>I would be anything you want to be</>
        : options.map(option => <SplitButtonExampleOption option={option} />)}
    </div>
  );
};

export default SplitButtonExampleDialog;
