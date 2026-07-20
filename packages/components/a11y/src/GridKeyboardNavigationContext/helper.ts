import { NavDirections } from "@vibe/shared";
import {
  type DirectionMap,
  type DirectionMaps,
  type GridElementRef,
  type Position
} from "./GridKeyboardNavigationContextConstants";

function throwIfCausingCircularDependency(directionMaps: DirectionMaps, newPosition: Position) {
  const { topElement, bottomElement, leftElement, rightElement } = newPosition;
  if (topElement && bottomElement) {
    if (directionMaps[NavDirections.UP].get(topElement) === bottomElement) {
      throwMessage("BOTTOM", "TOP");
    }
    if (directionMaps[NavDirections.DOWN].get(bottomElement) === topElement) {
      throwMessage("TOP", "BOTTOM");
    }
  }
  if (leftElement && rightElement) {
    if (directionMaps[NavDirections.LEFT].get(leftElement) === rightElement) {
      throwMessage("RIGHT", "LEFT");
    }
    if (directionMaps[NavDirections.RIGHT].get(rightElement) === leftElement) {
      throwMessage("LEFT", "RIGHT");
    }
  }

  function throwMessage(directionFrom: string, directionTo: string) {
    throw new Error(
      `Circular positioning detected: the ${directionFrom} element is already positioned to the ${directionTo} of the ${directionTo} element. This probably means the layout isn't ordered correctly.`
    );
  }
}

export const getDirectionMaps = (positions: Position[]) => {
  const directionMaps: DirectionMaps = {
    [NavDirections.RIGHT]: new Map(),
    [NavDirections.LEFT]: new Map(),
    [NavDirections.UP]: new Map(),
    [NavDirections.DOWN]: new Map()
  };
  positions.forEach(position => {
    throwIfCausingCircularDependency(directionMaps, position);

    const { topElement, bottomElement, leftElement, rightElement } = position;
    if (topElement && bottomElement) {
      directionMaps[NavDirections.UP].set(bottomElement, topElement);
      directionMaps[NavDirections.DOWN].set(topElement, bottomElement);
    }
    if (leftElement && rightElement) {
      directionMaps[NavDirections.LEFT].set(rightElement, leftElement);
      directionMaps[NavDirections.RIGHT].set(leftElement, rightElement);
    }
  });
  return directionMaps;
};

export const getOppositeDirection = (direction: NavDirections) => {
  switch (direction) {
    case NavDirections.LEFT:
      return NavDirections.RIGHT;
    case NavDirections.RIGHT:
      return NavDirections.LEFT;
    case NavDirections.UP:
      return NavDirections.DOWN;
    case NavDirections.DOWN:
      return NavDirections.UP;
    default:
      throw new Error(`Unexpected direction: ${direction}`);
  }
};

export const getOutmostElementInDirection = (
  directionMaps: DirectionMaps,
  direction: NavDirections
): GridElementRef => {
  const directionMap = directionMaps[direction];
  const firstEntry = [...directionMap][0];
  if (!firstEntry) {
    if ([NavDirections.LEFT, NavDirections.RIGHT].includes(direction)) {
      return getOutmostElementInDirection(directionMaps, NavDirections.UP);
    }
    return getOutmostElementInDirection(directionMaps, NavDirections.LEFT);
  }
  const firstRef = firstEntry[0];
  return getLastFocusableElementFromElementInDirection(directionMap, firstRef);
};

export const getNextElementToFocusInDirection = (
  directionMap: DirectionMap,
  elementRef: GridElementRef
): null | GridElementRef => {
  const next = directionMap.get(elementRef);
  if (!next) {
    return null;
  }
  if (!next.current || next.current.disabled || next.current.dataset?.disabled === "true") {
    return getNextElementToFocusInDirection(directionMap, next);
  }
  return next;
};

function getLastFocusableElementFromElementInDirection(directionMap: DirectionMap, initialRef: GridElementRef) {
  let done = false;
  let currentRef = initialRef;

  while (!done) {
    const nextEligible = getNextElementToFocusInDirection(directionMap, currentRef);
    if (!nextEligible) {
      done = true;
    } else {
      currentRef = nextEligible;
    }
  }

  return currentRef;
}
