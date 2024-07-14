import React from "react";
import { MaterialPicker } from "react-color";
import { HexColorPicker } from "react-colorful";
import { Button } from "../../../Button";
import { Delete } from "../../../Icon/Icons";
import styles from "./GeneralColorPicker.module.scss";
import { IconButton } from "../../../IconButton";
import { MaterialPickerStyles } from "./MaterialPickerStyles";
import "./GeneralColorPicker.module.scss";

interface GeneralColorPickerSectionProps {
  selectedColor: string;
  handleChange: (color: string) => void;
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
}) => {
  const handleColorChange = (color: any) => {
    if (color && typeof color === "object" && "hex" in color) {
      handleChange(color.hex); // Assuming you want to keep the interface consistent
    } else if (typeof color === "string") {
      handleChange(color); // Directly pass the string color
    }
  };

  return (
    <div>
      <div className={styles.hexColorPicker}>
        <HexColorPicker color={selectedColor} onChange={handleColorChange}></HexColorPicker>
      </div>
      <div className={styles.materialPicker}>
        <MaterialPicker
          color={selectedColor}
          onChange={handleColorChange}
          styles={MaterialPickerStyles}
        ></MaterialPicker>
      </div>
      {isEditing ? (
        <div className={styles.optionsBarEdit}>
          <IconButton size={Button.sizes.SMALL} icon={Delete} onClick={handleDeleteColor}></IconButton>
          <div className={styles.optionsBarEdit}>
            <Button kind={Button.kinds.TERTIARY} size={Button.sizes.SMALL} onClick={closePicker}>
              Cancel
            </Button>
            <Button size={Button.sizes.SMALL} onClick={handleEditChange}>
              Done
            </Button>
          </div>
        </div>
      ) : (
        <div className={styles.optionsBar}>
          <Button kind={Button.kinds.TERTIARY} size={Button.sizes.SMALL} onClick={closePicker}>
            Cancel
          </Button>
          <Button size={Button.sizes.SMALL} onClick={handleAddColorButtonClick}>
            Add
          </Button>
        </div>
      )}
    </div>
  );
};

export default GeneralColorPickerSection;
