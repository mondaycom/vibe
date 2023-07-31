import React from "react";
import { Check, Announcement } from "../../Icon/Icons";
import { MenuItem } from "../../index";
import SplitButtonMenu from "../SplitButtonMenu/SplitButtonMenu";

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
        <SplitButtonMenu>
          {options.map(option => (
            <MenuItem key={option.text} icon={option.icon} title={option.text} />
          ))}
        </SplitButtonMenu>
      )}
    </div>
  );
};

export default SplitButtonExampleDialog;
