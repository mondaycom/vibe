import { useCallback, useLayoutEffect, useState, useContext } from "react";
import useFullKeyboardListeners from "../useFullKeyboardListeners";
import { GridKeyboardNavigationContext } from "../../components/GridKeyboardNavigation/GridKeyboardNavigationContext";
import { calcActiveIndexAfterArrowNavigation, getActiveIndexFromInboundNavigation } from "./gridKeyboardNavigationHelper";
import useEventListener from "../useEventListener";

const NO_ACTIVE_INDEX = -1;

/**
 * @typedef useGridKeyboardNavigationResult
 * @property {number} activeIndex - the currently active index
 * @property {function} onSelectionAction - the callback which should be used to select an item. It should be called with the selected item's index. Use this callback for onClick handlers, for example.
 */

/**
 * A hook which is used for accessible keyboard navigation. Useful for components rendering a list of items that can be navigated and selected with a keyboard.
 * @param {Object} options
 * @param {React.MutableRefObject} options.ref - the reference for the component that listens to keyboard
 * @param {number} options.itemsCount - the number of items
 * @param {number} options.numberOfItemsInLine - the number of items on each line of the grid
 * @param {function} options.onItemClicked - the callback for selecting an item. It will be called when an active item is selected, for example with "Enter".
 * @param {function} options.getItemByIndex - a function which gets an index as a param, and returns the item on that index
 * @param {boolean=} options.focusOnMount - if true, the referenced element will be focused when mounted
 * @returns {useGridKeyboardNavigationResult}
 */
export default function useGridKeyboardNavigation({
  ref,
  itemsCount,
  numberOfItemsInLine,
  onItemClicked, // the callback to call when an item is selected
  focusOnMount = false,
  getItemByIndex = () => {}
}) {
  const [activeIndex, setActiveIndex] = useState(NO_ACTIVE_INDEX);

  const keyboardContext = useContext(GridKeyboardNavigationContext);

  const onArrowNavigation = direction => {
    if (activeIndex === NO_ACTIVE_INDEX) {
      setActiveIndex(0);
      return;
    }

    const { isOutbound, nextIndex } = calcActiveIndexAfterArrowNavigation({
      activeIndex,
      itemsCount,
      numberOfItemsInLine,
      direction
    });
    if (isOutbound) {
      keyboardContext?.onOutboundNavigation(ref, direction);
    } else {
      setActiveIndex(nextIndex);
    }
  };

  useLayoutEffect(() => {
    if (activeIndex > -1) {
      requestAnimationFrame(() => {
        ref?.current?.focus();
      });
    }
  }, [activeIndex, ref]);

  const blurTargetElement = useCallback(() => ref.current?.blur(), [ref]);

  const onFocus = useCallback(e => {
    const direction = e.detail?.keyboardDirection;
    if (direction) {
      const newIndex = getActiveIndexFromInboundNavigation({ direction, numberOfItemsInLine, itemsCount });
      setActiveIndex(newIndex);
      return;
    }
    if (activeIndex === NO_ACTIVE_INDEX) {
      setActiveIndex(0);
    }
  }, [activeIndex, itemsCount, numberOfItemsInLine]);

  const onBlur = useCallback(() => setActiveIndex(NO_ACTIVE_INDEX), [setActiveIndex]);

  useEventListener({ eventName: "focus", callback: onFocus, ref });
  useEventListener({ eventName: "blur", callback: onBlur, ref });

  const onSelectionAction = useCallback(
    index => {
      setActiveIndex(index);
      onItemClicked(getItemByIndex(index), index);
    },
    [onItemClicked, getItemByIndex]
  );

  const onKeyboardSelection = useCallback(() => onSelectionAction(activeIndex), [onSelectionAction, activeIndex]);

  useFullKeyboardListeners({
    ref,
    onArrowNavigation,
    onSelectionKey: onKeyboardSelection,
    onEscape: blurTargetElement,
    focusOnMount
  });

  return {
    activeIndex,
    onSelectionAction
  };
}
