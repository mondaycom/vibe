import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import useActiveDescendantListFocus from "hooks/useActiveDescendantListFocus";
import userEvent from "@testing-library/user-event";

let element;
const FIRST_ITEM_ID = "id-1";
const SECOND_ITEM_ID = "id-2";
const THIRD_ITEM_ID = "id-3";
const FOURTH_ITEM_ID = "id-4";
const FIFTH_ITEM_ID = "id-5";
const ITEM_IDS = [FIRST_ITEM_ID, SECOND_ITEM_ID, THIRD_ITEM_ID, FOURTH_ITEM_ID, FIFTH_ITEM_ID];

function renderHookForTest({
  onItemClick = jest.fn(),
  keepOptionSelected = false,
  isItemSelectable = () => true,
  isHorizontal = false
}) {
  element = document.createElement("div");
  element.tabIndex = -1; // some tests focus the element - a tabIndex value is required for updating the document.activeIndex value
  document.body.appendChild(element);

  const props = {
    focusedElementRef: {
      current: element
    },
    keepOptionSelected,
    itemsIds: ITEM_IDS,
    isItemSelectable: isItemSelectable,
    onItemClick,
    isHorizontalList: isHorizontal
  };
  return renderHook(argprops => useActiveDescendantListFocus({ ...props, ...argprops }));
}

function runListUnitTest({ isHorizontal, keepOptionSelected }) {
  const moveForwardKey = isHorizontal ? "{arrowRight}" : "{arrowDown}";
  const oppositeMoveForwardKey = !isHorizontal ? "{arrowRight}" : "{arrowDown}";
  const naturalIndex = keepOptionSelected ? 0 : undefined;
  const naturalIndexAfterInitial = keepOptionSelected ? 0 : -1;

  it("should focus same item after item changed", async () => {
    const onItemClick = jest.fn();
    const { result, rerender } = renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();
    });
    act(() => {
      userEvent.keyboard(moveForwardKey);
    });
    act(() => {
      userEvent.keyboard(moveForwardKey);
    });
    act(() => {
      userEvent.keyboard(moveForwardKey);
    });

    const beforeIndex = result.current.visualFocusItemIndex;
    const beforeId = result.current.visualFocusItemId;

    const removeItems = 2;
    const itemsAfterRemove = ITEM_IDS.slice(removeItems);
    rerender({ itemsIds: itemsAfterRemove });

    if (!keepOptionSelected) {
      expect(result.current.visualFocusItemId).toEqual(itemsAfterRemove[beforeIndex]);
      expect(result.current.visualFocusItemIndex).toEqual(beforeIndex);
    } else {
      expect(result.current.visualFocusItemId).toEqual(beforeId);
      expect(result.current.visualFocusItemIndex).toEqual(beforeIndex - removeItems);
    }
  });

  it("should focus correct item on focus", async () => {
    const onItemClick = jest.fn();
    const { result } = renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();
    });

    expect(result.current.visualFocusItemIndex).toEqual(naturalIndex);
  });

  it("should focus correct item keyboard forward", async () => {
    const onItemClick = jest.fn();
    const { result } = renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();
    });

    const keyboardTimes = 2;
    for (let i = 0; i < keyboardTimes; i++) {
      act(() => {
        // move visual focus to first item
        userEvent.keyboard(moveForwardKey);
      });
    }

    expect(result.current.visualFocusItemIndex).toEqual(naturalIndexAfterInitial + keyboardTimes);
  });

  it("should trigger onClick when focused element has natural focus and user navigate to item and press enter", async () => {
    const onItemClick = jest.fn();
    renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

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
    renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

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
    const isItemSelectable = i => i >= 3;
    const { result } = renderHookForTest({ onItemClick, isItemSelectable, isHorizontal, keepOptionSelected });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();

      // move visual focus to first item
      userEvent.keyboard(moveForwardKey);
    });

    expect(result.current.visualFocusItemIndex).toEqual(3);
  });

  it("should not navigate to next item when user try to navigate by using keys for the  opposite dimension to the list dimension ", async () => {
    const onItemClick = jest.fn();
    const { result } = renderHookForTest({ onItemClick, isHorizontal, keepOptionSelected });

    act(() => {
      // set focus on the list's element which in charge on natural focus element
      element.focus();

      // move visual focus to first item
      userEvent.keyboard(oppositeMoveForwardKey);
    });

    expect(result.current.visualFocusItemIndex).not.toEqual(naturalIndex + 1);
  });
}

const combineFeatures = features => {
  const combinations = [];
  // all closed
  const allClosedComb = {};
  for (let feature of features) {
    allClosedComb[feature] = false;
  }
  combinations.push(allClosedComb);

  // all open
  const allOpenComb = {};
  for (let feature of features) {
    allOpenComb[feature] = true;
  }
  combinations.push(allOpenComb);

  // one open all other closed
  for (const feature of features) {
    const oneOpen = {};
    oneOpen[feature] = true;
    for (const otherFeature of features) {
      oneOpen[otherFeature] = false;
    }
    combinations.push(oneOpen);
  }

  return combinations;
};

describe("useActiveDescendantListFocus", () => {
  afterEach(() => {
    element.remove();
    cleanup();
  });

  const features = {
    isHorizontal: { yes: "Horizontal", no: "Vertical" },
    keepOptionSelected: { yes: "KeepOpen", no: "" }
  };

  const featureCombinations = combineFeatures(Object.keys(features));
  for (const featureComb of featureCombinations) {
    describe(`${Object.entries(featureComb)
      .map(([feat, value]) => (value ? features[feat].yes : features[feat].no))
      .filter(b => b)
      .join(", ")} list`, () => {
      runListUnitTest(featureComb);
    });
  }
});
