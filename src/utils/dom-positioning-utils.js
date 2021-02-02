/*
 * DOM positioning Utils.
 */
import { createPopper } from "@popperjs/core";

/**
 * Position param ('top', 'right', 'bottom', 'left')
 * Options param (xOffset: integer, yOffset: integer)
 */

export const positionToDestination = (element, target, position, justify, options = {}) => {
  const xOffset = options.xOffset ? options.xOffset : 0;
  const yOffset = options.yOffset ? options.yOffset : 0;
  createPopper(target, element, {
    placement: position,
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [xOffset, yOffset]
        }
      }
    ]
  });
};
