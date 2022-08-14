import { useCallback, useEffect, useState, useContext, useRef } from "react";
import { GridKeyboardNavigationContext } from "../../components/GridKeyboardNavigationContext/GridKeyboardNavigationContext";
import useFullKeyboardListeners from "../../hooks/useFullKeyboardListeners";
import useEventListener from "../../hooks/useEventListener";
import {
  calcActiveIndexAfterArrowNavigation,
  getActiveIndexFromInboundNavigation
} from "./gridKeyboardNavigationHelper";
import { useLastNavigationDirection } from "../../components/Menu/Menu/hooks/useLastNavigationDirection";

const NO_ACTIVE_INDEX = -1;

/**
 * A hook which is used for accessible keyboard navigation. Useful for components rendering a list of items that can be navigated and selected with a keyboard.
 * @param {Object} options
 * @param {React.MutableRefObject} options.ref - the reference for the component that listens to keyboard
 * @param {number} options.itemsCount - the number of items
 * @param {number} options.numberOfItemsInLine - the number of items on each line of the grid
 * @param {function} options.onItemClicked - the callback for selecting an item. It will be called when an active item is selected, for example with "Enter".
 * @param {function} options.getItemByIndex - a function which gets an index as a param, and returns the item on that index
 * @param {boolean=} options.focusOnMount - if true, the referenced element will be focused when mounted
 * @param {number=} options.focusItemIndexOnMount - optional item index to focus when mounted. Only works with "options.focusOnMount".
 * @param {number[]=} options.disabledIndexes - optional array of disabled indices, which will be skipped while navigating.
 * @returns {useGridKeyboardNavigationResult}
 *
 * @typedef useGridKeyboardNavigationResult
 * @property {number} activeIndex - the currently active index
 * @property {boolean} isInitialActiveState - if true, the currently active element was due to an initial mounting index option. See "options.focusItemIndexOnMount".
 * @property {(index: number, isKeyboardAction?: boolean) => void} onSelectionAction - the callback which should be used to select an item.
 * It should be called with the selected item's index. Use this callback for onClick handlers, for example.
 * The "isKeyboardAction" can be used to indicate a keyboard selection, which will affect the currently active index.
 */
export default function useGridKeyboardNavigation({
  ref,
  itemsCount,
  numberOfItemsInLine,
  onItemClicked, // the callback to call when an item is selected
  focusOnMount = false,
  getItemByIndex = () => {},
  focusItemIndexOnMount = NO_ACTIVE_INDEX,
  disabledIndexes = []
}) {
  const [isInitialActiveState, setIsInitialActiveState] = useState(
    focusOnMount && focusItemIndexOnMount !== NO_ACTIVE_INDEX
  );
  const skippedInitialActiveIndexChange = useRef(false);
  const [activeIndex, setActiveIndex] = useState(isInitialActiveState ? focusItemIndexOnMount : NO_ACTIVE_INDEX);
  const [isUsingKeyboardNav, setIsUsingKeyboardNav] = useState(true);

  const keyboardContext = useContext(GridKeyboardNavigationContext);

  const onArrowNavigation = direction => {
    setIsUsingKeyboardNav(true);
    if (activeIndex === NO_ACTIVE_INDEX) {
      setActiveIndex(0);
      return;
    }

    const { isOutbound, nextIndex } = calcActiveIndexAfterArrowNavigation({
      activeIndex,
      itemsCount,
      numberOfItemsInLine,
      direction,
      disabledIndexes
    });
    if (isOutbound) {
      keyboardContext?.onOutboundNavigation(ref, direction);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  useEffect(() => {
    if (!skippedInitialActiveIndexChange.current) {
      skippedInitialActiveIndexChange.current = true;
      return;
    }
    // if the active state changes, this is no longer the initial active state
    setIsInitialActiveState(false);
  }, [activeIndex]);

  const blurTargetElement = useCallback(() => ref.current?.blur(), [ref]);

  const { lastNavigationDirectionRef } = useLastNavigationDirection();
  const onFocus = useCallback(() => {
    const direction = lastNavigationDirectionRef.current;
    if (direction) {
      // if we did not already focused on any grid item, set focus according to the item which selected
      if (activeIndex === -1) {
        const newIndex = getActiveIndexFromInboundNavigation({ direction, numberOfItemsInLine, itemsCount });
        setActiveIndex(newIndex);
      }
      setIsUsingKeyboardNav(true);
      return;
    }
    if (activeIndex === NO_ACTIVE_INDEX) {
      setActiveIndex(0);
    }
  }, [activeIndex, itemsCount, lastNavigationDirectionRef, numberOfItemsInLine]);

  const onMouseDown = useCallback(() => {
    // If the user clicked on the grid element we assume that that what will caused the focus
    setIsUsingKeyboardNav(false);
  }, [setIsUsingKeyboardNav]);

  const onBlur = useCallback(() => {
    // If we lose focus we will return to isUsingKeyboardNav default mode which is that any interaction
    // with the grid always done by keyboard, unless we clicked on the grid element before that with a mouse
    setIsUsingKeyboardNav(true);
    setActiveIndex(NO_ACTIVE_INDEX);
  }, [setActiveIndex]);

  useEventListener({ eventName: "focus", callback: onFocus, ref });
  useEventListener({ eventName: "mousedown", callback: onMouseDown, ref });
  useEventListener({ eventName: "blur", callback: onBlur, ref });

  useEffect(() => {
    if (activeIndex > -1) {
      ref.current?.focus();
    }
  }, [activeIndex, ref]);

  const onSelectionAction = useCallback(
    (index, isKeyboardAction = false) => {
      setIsUsingKeyboardNav(isKeyboardAction);
      setActiveIndex(index);
      onItemClicked(getItemByIndex(index), index);
    },
    [setActiveIndex, onItemClicked, getItemByIndex]
  );

  const onKeyboardSelection = useCallback(() => {
    if (!isUsingKeyboardNav) {
      return;
    }
    return onSelectionAction(activeIndex, true);
  }, [isUsingKeyboardNav, onSelectionAction, activeIndex]);

  useFullKeyboardListeners({
    ref,
    onArrowNavigation,
    onSelectionKey: onKeyboardSelection,
    onEscape: blurTargetElement,
    focusOnMount
  });

  // if the user is not using keyboard nav, the consumers should not treat the index as active
  const externalActiveIndex = isUsingKeyboardNav ? activeIndex : NO_ACTIVE_INDEX;
  return {
    activeIndex: externalActiveIndex,
    onSelectionAction,
    isInitialActiveState
  };
}
