import { cleanup, renderHook } from "@testing-library/react-hooks";
import { useFocusGridItemByActiveStatus } from "../useFocusGridItemByActiveStatus";

import * as useLastNavigationDirectionModule from "../../Menu/hooks/useLastNavigationDirection";

describe("useFocusGridItemByActiveStatus", () => {
  let element, childElement, wrapperRef, childRef;

  beforeEach(() => {
    element = document.createElement("div");
    document.body.appendChild(element);
    jest.spyOn(element, "blur");
    jest.spyOn(element, "focus");

    childElement = document.createElement("input");
    element.appendChild(childElement);
    jest.spyOn(childElement, "focus");

    wrapperRef = { current: element };
    childRef = { current: childElement };

    jest.spyOn(useLastNavigationDirectionModule, "useLastNavigationDirection");
  });

  afterEach(() => {
    element.remove();
    childElement.remove();
    cleanup();
    jest.restoreAllMocks();
  });

  it("it should blur the wrapper element if index != activeItemIndex", () => {
    renderHook(() => useFocusGridItemByActiveStatus({ index: 0, activeItemIndex: 1, wrapperRef, childRef }));

    expect(element.blur).toHaveBeenCalledTimes(1);
  });

  it("it should do nothing if useDocumentEventListeners and index != activeItemIndex", () => {
    renderHook(() =>
      useFocusGridItemByActiveStatus({
        index: 0,
        activeItemIndex: 1,
        wrapperRef,
        childRef,
        useDocumentEventListeners: true
      })
    );

    expect(element.blur).not.toHaveBeenCalled();
    expect(element.focus).not.toHaveBeenCalled();
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

    expect(childElement.focus).toHaveBeenCalledTimes(1);
  });

  it("should focus the child element, with current direction, when activeItemIndex changes to given index", () => {
    mockLastNavigationDirection("some direction");
    const props = { index: 1, activeItemIndex: 0, wrapperRef, childRef };
    const { rerender } = renderHook(() => useFocusGridItemByActiveStatus(props));
    expect(childElement.focus).not.toHaveBeenCalled();

    props.activeItemIndex = props.index;
    rerender();

    expect(childElement.focus).toHaveBeenCalledTimes(1);
  });

  function mockLastNavigationDirection(currentDirectionValue) {
    useLastNavigationDirectionModule.useLastNavigationDirection.mockReturnValue({
      lastNavigationDirectionRef: { current: currentDirectionValue }
    });
  }
});
