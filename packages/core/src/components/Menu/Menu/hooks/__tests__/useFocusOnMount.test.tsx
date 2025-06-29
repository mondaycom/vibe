import { vi, beforeEach, afterEach, describe, it, expect, MockedFunction } from "vitest";
import { renderHook } from "@testing-library/react-hooks";
import { useFocusOnMount, UseFocusOnMountProps } from "../useFocusOnMount";
import { isMenuChildSelectable } from "../../utils/utils";
import { ReactElement } from "react";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../../tests/__tests__/test-utils";

vi.mock("../../utils/utils", () => ({
  isMenuChildSelectable: vi.fn()
}));

function renderHookWithProps(props: Partial<UseFocusOnMountProps>) {
  return renderHook(() =>
    useFocusOnMount({
      focusItemIndexOnMount: -1,
      focusChildOnMount: {} as ReactElement,
      getNextSelectableIndex: vi.fn(),
      updateActiveItemIndex: vi.fn(),
      setIsInitialFocusSet: vi.fn(),
      ...props
    })
  );
}

describe("useFocusOnMount", () => {
  const mockUpdateActiveItemIndex = vi.fn();
  const mockSetIsInitialFocusSet = vi.fn();

  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
    vi.clearAllMocks();
  });

  it("should not focus when focusItemIndexOnMount is -1", () => {
    renderHookWithProps({
      focusItemIndexOnMount: -1,
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).not.toHaveBeenCalled();
    expect(mockSetIsInitialFocusSet).not.toHaveBeenCalled();
  });

  it("should set focus to the initial child if it is selectable", () => {
    (isMenuChildSelectable as MockedFunction<typeof isMenuChildSelectable>).mockReturnValueOnce(true);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).toHaveBeenCalledWith(0);
    expect(mockSetIsInitialFocusSet).toHaveBeenCalledWith(true);
  });

  it("should set focus to the next selectable child if initial is not selectable", () => {
    (isMenuChildSelectable as MockedFunction<typeof isMenuChildSelectable>)
      .mockReturnValue(true)
      .mockReturnValueOnce(false);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      getNextSelectableIndex: vi.fn().mockReturnValueOnce(1),
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).toHaveBeenCalledWith(1);
    expect(mockSetIsInitialFocusSet).toHaveBeenCalledWith(true);
  });

  it("should not set focus if no selectable children found", () => {
    (isMenuChildSelectable as MockedFunction<typeof isMenuChildSelectable>).mockReturnValue(false);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      getNextSelectableIndex: vi.fn().mockReturnValueOnce(null),
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).not.toHaveBeenCalled();
    expect(mockSetIsInitialFocusSet).not.toHaveBeenCalled();
  });
});
