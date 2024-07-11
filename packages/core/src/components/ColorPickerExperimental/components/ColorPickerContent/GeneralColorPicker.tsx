import React from "react";
import { SketchPicker } from "react-color";
import { Button } from "../../../Button";
import { Delete } from "../../../Icon/Icons";
import styles from "./ColorPickerContent.module.scss";
import cx from "classnames";
import { IconButton } from "../../../IconButton";
import { customStyles } from "./GeneralColorPickerStyles";

interface GeneralColorPickerSectionProps {
  selectedColor: string;
  handleChange: (color: { hex: React.SetStateAction<string> }) => void;
  closePicker: () => void;
  handleAddColorButtonClick: () => void;
  isEditing: boolean;
  handleEditChange: () => void;
  handleDeleteColor: () => void;
}

const GeneralColorPickerSection: React.FC<GeneralColorPickerSectionProps> = ({
  selectedColor,
  handleChange,
  closePicker,
  handleAddColorButtonClick,
  isEditing,
  handleEditChange,
  handleDeleteColor
}) => (
  <>
    <SketchPicker
      color={selectedColor}
      onChange={handleChange}
      styles={customStyles}
      disableAlpha={true}
      presetColors={[]}
    />
    {isEditing ? (
      <div className={cx(styles.generalPickerOptionsBarEdit)}>
        <IconButton size={Button.sizes.SMALL} icon={Delete} onClick={handleDeleteColor}></IconButton>
        <div className={cx(styles.generalPickerOptionsBarEdit)}>
          <Button kind={Button.kinds.TERTIARY} size={Button.sizes.SMALL} onClick={closePicker}>
            Cancel
          </Button>
          <Button size={Button.sizes.SMALL} onClick={handleEditChange}>
            Done
          </Button>
        </div>
      </div>
    ) : (
      <div className={cx(styles.generalPickerOptionsBar)}>
        <Button kind={Button.kinds.TERTIARY} size={Button.sizes.SMALL} onClick={closePicker}>
          Cancel
        </Button>
        <Button size={Button.sizes.SMALL} onClick={handleAddColorButtonClick}>
          Add
        </Button>
      </div>
    )}
  </>
);

export default GeneralColorPickerSection;
