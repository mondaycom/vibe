import { NAV_DIRECTIONS } from "../../hooks/useFullKeyboardListeners";

function throwIfCausingCircularDependency(directionMaps, newPosition) {
  const { topElement, bottomElement, leftElement, rightElement } = newPosition;
  if (topElement && bottomElement) {
    if (directionMaps[NAV_DIRECTIONS.UP].get(topElement) === bottomElement) {
      throwMessage("BOTTOM", "TOP");
    }
    if (directionMaps[NAV_DIRECTIONS.DOWN].get(bottomElement) === topElement) {
      throwMessage("TOP", "BOTTOM");
    }
  }
  if (leftElement && rightElement) {
    if (directionMaps[NAV_DIRECTIONS.LEFT].get(leftElement) === rightElement) {
      throwMessage("RIGHT", "LEFT");
    }
    if (directionMaps[NAV_DIRECTIONS.RIGHT].get(rightElement) === leftElement) {
      throwMessage("LEFT", "RIGHT");
    }
  }

  function throwMessage(directionFrom, directionTo) {
    throw new Error(
      `Circular positioning detected: the ${directionFrom} element is already positioned to the ${directionTo} of the ${directionTo} element. This probably means the layout isn't ordered correctly.`
    );
  }
}

export const getDirectionMaps = positions => {
  const directionMaps = {
    [NAV_DIRECTIONS.RIGHT]: new Map(),
    [NAV_DIRECTIONS.LEFT]: new Map(),
    [NAV_DIRECTIONS.UP]: new Map(),
    [NAV_DIRECTIONS.DOWN]: new Map()
  };
  positions.forEach(position => {
    throwIfCausingCircularDependency(directionMaps, position);

    const { topElement, bottomElement, leftElement, rightElement } = position;
    if (topElement && bottomElement) {
      directionMaps[NAV_DIRECTIONS.UP].set(bottomElement, topElement);
      directionMaps[NAV_DIRECTIONS.DOWN].set(topElement, bottomElement);
    }
    if (leftElement && rightElement) {
      directionMaps[NAV_DIRECTIONS.LEFT].set(rightElement, leftElement);
      directionMaps[NAV_DIRECTIONS.RIGHT].set(leftElement, rightElement);
    }
  });
  return directionMaps;
};

export const getOppositeDirection = direction => {
  if (direction === NAV_DIRECTIONS.LEFT) return NAV_DIRECTIONS.RIGHT;
  if (direction === NAV_DIRECTIONS.RIGHT) return NAV_DIRECTIONS.LEFT;
  if (direction === NAV_DIRECTIONS.UP) return NAV_DIRECTIONS.DOWN;
  if (direction === NAV_DIRECTIONS.DOWN) return NAV_DIRECTIONS.UP;
};

export const focusElementWithDirection = (elementRef, direction) =>
  elementRef?.current?.dispatchEvent(new CustomEvent("focus", { detail: { keyboardDirection: direction } }));

export const getOutmostElementInDirection = (directionMaps, direction) => {
  const directionMap = directionMaps[direction];
  const firstEntry = [...directionMap][0]; // start with any element
  if (!firstEntry) {
    // no relations were registered for this direction - fallback to a different direction
    if ([NAV_DIRECTIONS.LEFT, NAV_DIRECTIONS.RIGHT].includes(direction)) {
      // there are no registered horizontal relations registered, try vertical relations. Get the top-most element.
      return getOutmostElementInDirection(directionMaps, NAV_DIRECTIONS.UP);
    }
    // there are no registered vertical relations registered, try horizontal relations. Get the left-most element.
    return getOutmostElementInDirection(directionMaps, NAV_DIRECTIONS.LEFT);
  }
  let result = firstEntry?.[0];
  while (directionMap.get(result)) {
    // as long as there's an element which is outward of the keyboard direction, take it.
    result = directionMap.get(result);
  }
  return result;
};
