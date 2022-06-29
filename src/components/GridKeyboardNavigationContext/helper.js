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
  switch (direction) {
    case NAV_DIRECTIONS.LEFT:
      return NAV_DIRECTIONS.RIGHT;
    case NAV_DIRECTIONS.RIGHT:
      return NAV_DIRECTIONS.LEFT;
    case NAV_DIRECTIONS.UP:
      return NAV_DIRECTIONS.DOWN;
    case NAV_DIRECTIONS.DOWN:
      return NAV_DIRECTIONS.UP;
    default:
      throw new Error(`Unexpected direction: ${direction}`);
  }
};

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
  const firstRef = firstEntry[0];
  return getLastFocusableElementFromElementInDirection(directionMap, firstRef);
};

export const getNextElementToFocusInDirection = (directionMap, elementRef) => {
  const next = directionMap.get(elementRef);
  if (!next) {
    // this is the last element on the direction map - there' nothing next
    return null;
  }
  if (!next.current || next.current.disabled || next.current.dataset?.disabled === "true") {
    // the next element is not mounted or disabled - try the next one
    return getNextElementToFocusInDirection(directionMap, next);
  }
  return next;
};

function getLastFocusableElementFromElementInDirection(directionMap, initialRef) {
  let done = false;
  let currentRef = initialRef;

  while (!done) {
    // as long as there's a mounted element which in that direction, take it.
    const nextEligible = getNextElementToFocusInDirection(directionMap, currentRef);
    if (!nextEligible) {
      done = true;
    } else {
      currentRef = nextEligible;
    }
  }

  return currentRef;
}
