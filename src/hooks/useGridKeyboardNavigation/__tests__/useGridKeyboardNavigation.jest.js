import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import range from "lodash/range";
import useGridKeyboardNavigation from "../useGridKeyboardNavigation";
import { NAV_DIRECTIONS } from "../../useFullKeyboardListeners";

describe("useGridKeyboardNavigation", () => {
  let element;

  afterEach(() => {
    element.remove();
    cleanup();
  });

  it("should set the active index to 0 when focusing for the first time", () => {
    const { result } = renderHookForTest({});

    act(() => {
      element.dispatchEvent(new Event("focus"));
    });

    expect(result.current.activeIndex).toBe(0);
  });

  it("should consider the navigation direction when focusing the element with a custom event", () => {
    const items = itemsArray(9);
    const { result } = renderHookForTest({ items, numberOfItemsInLine: 3 });

    act(() => {
      element.dispatchEvent(new CustomEvent("focus", { detail: { keyboardDirection: NAV_DIRECTIONS.LEFT } }));
    });

    expect(result.current.activeIndex).toBe(5); // last index of the right-most line
  });

  it("should return a callback wrapper that sets the activeIndex to the clicked element", () => {
    const { result } = renderHookForTest({});

    act(() => result.current.onSelectionAction(3));

    expect(result.current.activeIndex).toBe(3);
  });

  it("should return a callback wrapper that calls onItemClicked with the item and the index", () => {
    const onItemClicked = jest.fn();
    const items = ["a", "b", "c", "d"];
    const { result } = renderHookForTest({ onItemClicked, items });

    act(() => result.current.onSelectionAction(2));

    expect(onItemClicked).toHaveBeenCalledTimes(1);
    expect(onItemClicked).toHaveBeenCalledWith("c", 2);
  });

  it("should update the activeIndex when keyboard-navigating inside the element", () => {
    const items = ["a", "b", "c", "d"];
    const { result } = renderHookForTest({ items, numberOfItemsInLine: 2 });

    act(() => result.current.onSelectionAction(0)); // set the activeIndex to 0
    act(() => {
      fireEvent.keyDown(element, { key: "ArrowRight" });
    });

    expect(result.current.activeIndex).toBe(1);
  });

  it("should not update the activeIndex when performing outbound navigation with the keyboard", () => {
    const items = ["a", "b", "c", "d"];
    const { result } = renderHookForTest({ items, numberOfItemsInLine: 2 });

    act(() => result.current.onSelectionAction(0)); // set the activeIndex to 0
    act(() => {
      fireEvent.keyDown(element, { key: "ArrowUp" });
    });

    expect(result.current.activeIndex).toBe(0);
  });

  it("should skip disabled indexes when navigating with the keyboard", () => {
    const items = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
    const disabledIndexes = [1, 4];
    const { result } = renderHookForTest({
      items,
      numberOfItemsInLine: 3,
      focusItemIndexOnMount: 0,
      focusOnMount: true,
      disabledIndexes
    });

    act(() => {
      fireEvent.keyDown(element, { key: "ArrowRight" }); // moving right from index 0 should skip disabled index 1, and set activeIndex to 2
    });

    expect(result.current.activeIndex).toBe(2);
  });

  describe("focusItemIndexOnMount", () => {
    it("should set the active index according to focusItemIndexOnMount on mount, when focusOnMount is true", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusItemIndexOnMount: 2, focusOnMount: true });

      expect(result.current.activeIndex).toBe(2);
    });

    it("should ignore the value of focusItemIndexOnMount, when focusOnMount is false", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusItemIndexOnMount: 2, focusOnMount: false });

      expect(result.current.activeIndex).toBe(-1);
    });

    it("should return isInitialActiveState = false when focusItemIndexOnMount option is missing", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusOnMount: true });

      expect(result.current.isInitialActiveState).toBe(false);
    });

    it("should return isInitialActiveState = false when focusOnMount = false and focusItemIndexOnMount option exists", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusItemIndexOnMount: 2, focusOnMount: false });

      expect(result.current.isInitialActiveState).toBe(false);
    });

    it("should return isInitialActiveState = true when focusOnMount and focusItemIndexOnMount option exists", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusItemIndexOnMount: 2, focusOnMount: true });

      expect(result.current.isInitialActiveState).toBe(true);
    });

    it("should return isInitialActiveState = false when focusOnMount and focusItemIndexOnMount option exists, and activeIndex changed afterwards", () => {
      const items = ["a", "b", "c", "d"];

      const { result } = renderHookForTest({ items, focusItemIndexOnMount: 2, focusOnMount: true });
      act(() => {
        fireEvent.keyDown(element, { key: "ArrowLeft" });
      });

      expect(result.current.isInitialActiveState).toBe(false);
    });
  });

  function itemsArray(length) {
    return range(length);
  }

  function renderHookForTest({
    items = itemsArray(4),
    numberOfItemsInLine = 3,
    onItemClicked = jest.fn(),
    focusOnMount = false,
    focusItemIndexOnMount = undefined,
    disabledIndexes = []
  }) {
    const itemsCount = items.length;
    const getItemByIndex = index => items[index];

    element = document.createElement("div");
    document.body.appendChild(element);

    return renderHook(() =>
      useGridKeyboardNavigation({
        ref: { current: element },
        itemsCount,
        getItemByIndex,
        onItemClicked,
        focusOnMount,
        numberOfItemsInLine,
        focusItemIndexOnMount,
        disabledIndexes
      })
    );
  }
});
