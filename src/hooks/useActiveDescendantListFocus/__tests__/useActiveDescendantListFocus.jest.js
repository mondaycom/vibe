import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import range from "lodash/range";
import useActiveDescendantListFocus from "hooks/useActiveDescendantListFocus";
import userEvent from "@testing-library/user-event";

let element;
const FIRST_ITEM_ID = "id-1";
const SECOND_ITEM_ID = "id-2";
const ITEM_IDS = [FIRST_ITEM_ID, SECOND_ITEM_ID];

function renderHookForTest({ onItemClick = jest.fn(), isItemSelectable = () => true, isHorizontal = false }) {
  element = document.createElement("div");
  element.tabIndex = -1; // some tests focus the element - a tabIndex value is required for updating the document.activeIndex value
  document.body.appendChild(element);

  return renderHook(() =>
    useActiveDescendantListFocus({
      focusedElementRef: {
        current: element
      },
      itemsIds: ITEM_IDS,
      isItemSelectable: isItemSelectable,
      onItemClick,
      isHorizontalList: isHorizontal
    })
  );
}

function runListUnitTest(isHorizontal) {
  const moveForwardKey = isHorizontal ? "{arrowRight}" : "{arrowDown}";
  const oppositeMoveForwardKey = !isHorizontal ? "{arrowRight}" : "{arrowDown}";
  it("should trigger onClick when focused element has natural focus and user navigate to item and press enter", async () => {
    const onItemClick = jest.fn();
    const { result } = renderHookForTest({ onItemClick, isHorizontal });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();
      // move visual focus to first item
      userEvent.keyboard(moveForwardKey);
    });

    act(() => {
      // Trigger on click by press enter
      userEvent.keyboard("{Enter}");
    });

    expect(onItemClick).toHaveBeenCalledTimes(1);
    expect(onItemClick).toHaveBeenCalledWith(expect.objectContaining({}), 0);
  });

  it("should not trigger onClick when focused element does not have natural focus and user navigate to item and press enter", async () => {
    const onItemClick = jest.fn();
    const { result } = renderHookForTest({ onItemClick, isHorizontal });

    act(() => {
      // move visual focus to first item
      userEvent.keyboard(moveForwardKey);
    });

    act(() =>
      // Trigger on click by press enter
      userEvent.keyboard("{Enter}")
    );

    expect(onItemClick).toHaveBeenCalledTimes(0);
  });

  it("should skip not selectable item when user try to navigate to it", async () => {
    const onItemClick = jest.fn();
    const isItemSelectable = i => i !== 0;
    const { result } = renderHookForTest({ onItemClick, isItemSelectable, isHorizontal });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();

      // move visual focus to first item
      userEvent.keyboard(moveForwardKey);
    });

    expect(result.current.visualFocusItemIndex).toEqual(1);
  });

  it("should not navigate to next item when user try to navigate by using keys for the  opposite dimension to the list dimension ", async () => {
    const onItemClick = jest.fn();
    const isItemSelectable = i => i !== 0;
    const { result } = renderHookForTest({ onItemClick, isItemSelectable, isHorizontal });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();

      // move visual focus to first item
      userEvent.keyboard(oppositeMoveForwardKey);
    });

    expect(result.current.visualFocusItemIndex).toEqual(-1);
  });
}

describe("useActiveDescendantListFocus", () => {
  afterEach(() => {
    element.remove();
    cleanup();
  });

  describe("Vertical list", () => {
    const isHorizontal = false;
    runListUnitTest(isHorizontal);
  });
  describe("Horizontal list", () => {
    const isHorizontal = true;
    runListUnitTest(isHorizontal);
  });
});

/**

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

  it("should ignore a keyboard selection action if the user is currently not using the keyboard", () => {
    const { result } = renderHookForTest({ focusItemIndexOnMount: 2, focusOnMount: true });

    act(() => result.current.onSelectionAction(3, true)); // set the activeIndex to 3
    act(() => result.current.onSelectionAction(2)); // perform a non-keyboard action

    expect(result.current.isInitialActiveState).toBe(false);
  });
**/
