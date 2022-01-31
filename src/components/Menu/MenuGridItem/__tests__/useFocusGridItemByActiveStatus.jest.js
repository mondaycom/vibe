import { cleanup, renderHook } from "@testing-library/react-hooks";
import { useFocusGridItemByActiveStatus } from "../useFocusGridItemByActiveStatus";

import * as GridKeyboardNavigationContextHelperModule from "../../../GridKeyboardNavigationContext/helper";
import * as useLastNavigationDirectionModule from "../../Menu/hooks/useLastNavigationDirection";

describe("useFocusGridItemByActiveStatus", () => {
  let element, childElement, wrapperRef, childRef;

  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
    jest.spyOn(element, "blur");

    childElement = document.createElement("input");
    element.appendChild(childElement);

    wrapperRef = { current: element };
    childRef = { current: childElement };

    jest.spyOn(GridKeyboardNavigationContextHelperModule, "focusElementWithDirection");
    jest.spyOn(useLastNavigationDirectionModule, "useLastNavigationDirection");
  });

  afterEach(() => {
    element.remove();
    cleanup();
    jest.restoreAllMocks();
  });

  it("it should blur the wrapper element if index != activeItemIndex", () => {
    renderHook(() => useFocusGridItemByActiveStatus({ index: 0, activeItemIndex: 1, wrapperRef, childRef }));

    expect(element.blur).toHaveBeenCalledTimes(1);
  });

  it("it should blur the wrapper element if activeItemIndex changes from the given index to a different one", () => {
    const props = { index: 0, activeItemIndex: 0, wrapperRef, childRef };
    const { rerender } = renderHook(() => useFocusGridItemByActiveStatus(props));
    expect(element.blur).not.toBeCalled();

    props.activeItemIndex = props.index + 1;
    rerender();

    expect(element.blur).toHaveBeenCalledTimes(1);
  });

  it("should focus the child element, with current direction, when mounting and index === activeItemIndex", () => {
    mockLastNavigationDirection("some direction");
    renderHook(() => useFocusGridItemByActiveStatus({ index: 1, activeItemIndex: 1, wrapperRef, childRef }));

    expect(GridKeyboardNavigationContextHelperModule.focusElementWithDirection).toHaveBeenCalledTimes(1);
    expect(GridKeyboardNavigationContextHelperModule.focusElementWithDirection).toHaveBeenLastCalledWith(
      childRef,
      "some direction"
    );
  });

  it("should focus the child element, with current direction, when activeItemIndex changes to given index", () => {
    mockLastNavigationDirection("some direction");
    const props = { index: 1, activeItemIndex: 0, wrapperRef, childRef };
    const { rerender } = renderHook(() => useFocusGridItemByActiveStatus(props));
    expect(GridKeyboardNavigationContextHelperModule.focusElementWithDirection).not.toBeCalled();

    props.activeItemIndex = props.index;
    rerender();

    expect(GridKeyboardNavigationContextHelperModule.focusElementWithDirection).toHaveBeenCalledTimes(1);
    expect(GridKeyboardNavigationContextHelperModule.focusElementWithDirection).toHaveBeenLastCalledWith(
      childRef,
      "some direction"
    );
  });

  function mockLastNavigationDirection(currentDirectionValue) {
    useLastNavigationDirectionModule.useLastNavigationDirection.mockReturnValue({
      lastNavigationDirectionRef: { current: currentDirectionValue }
    });
  }
});
