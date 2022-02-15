import React from "react";
import { Check, Announcement } from "../../Icon/Icons";
import { Menu, MenuItem } from "../../index";

const DialogDefault = [
  { icon: Check, text: "Hey" },
  { icon: Announcement, text: "There" }
];

const SplitButtonExampleDialog = ({ options = DialogDefault }) => {
  return (
    <div>
      {!options ? (
        <>I would be anything you want to be</>
      ) : (
        <Menu>
          {options.map(option => (
            <MenuItem key={option.text} icon={option.icon} title={option.text} />
          ))}
        </Menu>
      )}
    </div>
  );
};

export default SplitButtonExampleDialog;
