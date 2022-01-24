import React from "react";
import PropTypes from "prop-types";
import useGridKeyboardNavigation from "../../../../hooks/useGridKeyboardNavigation/useGridKeyboardNavigation";
import Button from "../../../Button/Button";
import NoColor from "../../../Icon/Icons/components/NoColor";

export const ColorPickerClearButton = React.forwardRef(
  ({ onClick, text, Icon, isActive, onOutboundNavigation }, ref) => {
    const { onSelectionAction } = useGridKeyboardNavigation({
      ref,
      itemsCount: 1,
      numberOfItemsInLine: 1,
      onOutboundNavigation,
      onItemClicked: onClick
    });

    return (
      <Button
        ref={ref}
        size={Button.sizes.SMALL}
        kind={Button.kinds.TERTIARY}
        onClick={onSelectionAction}
        active={isActive}
        className="clear-color-button"
      >
        <Icon size="16" className="clear-color-icon" />
        {text}
      </Button>
    );
  }
);

ColorPickerClearButton.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  Icon: PropTypes.func,
  isActive: PropTypes.bool,
  onOutboundNavigation: PropTypes.func
};

ColorPickerClearButton.defaultProps = {
  onClick: () => {},
  text: "Clear",
  Icon: NoColor,
  isActive: false,
  onOutboundNavigation: () => {}
};
