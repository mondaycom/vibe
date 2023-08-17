import { renderHook } from "@testing-library/react-hooks";
import { useFocusOnMount, UseFocusOnMountProps } from "../useFocusOnMount";
import { isMenuChildSelectable } from "../../utils/utils";
import { ReactElement } from "react";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../../tests/__tests__/test-utils";

jest.mock("../../utils/utils", () => ({
  isMenuChildSelectable: jest.fn()
}));

function renderHookWithProps(props: Partial<UseFocusOnMountProps>) {
  return renderHook(() =>
    useFocusOnMount({
      focusItemIndexOnMount: -1,
      focusChildOnMount: {} as ReactElement,
      getNextSelectableIndex: jest.fn(),
      updateActiveItemIndex: jest.fn(),
      setIsInitialFocusSet: jest.fn(),
      ...props
    })
  );
}

describe("useFocusOnMount", () => {
  const mockUpdateActiveItemIndex = jest.fn();
  const mockSetIsInitialFocusSet = jest.fn();

  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
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
    (isMenuChildSelectable as jest.Mock).mockReturnValueOnce(true);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).toHaveBeenCalledWith(0);
    expect(mockSetIsInitialFocusSet).toHaveBeenCalledWith(true);
  });

  it("should set focus to the next selectable child if initial is not selectable", () => {
    (isMenuChildSelectable as jest.Mock).mockReturnValue(true).mockReturnValueOnce(false);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      getNextSelectableIndex: jest.fn().mockReturnValueOnce(1),
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).toHaveBeenCalledWith(1);
    expect(mockSetIsInitialFocusSet).toHaveBeenCalledWith(true);
  });

  it("should not set focus if no selectable children found", () => {
    (isMenuChildSelectable as jest.Mock).mockReturnValue(false);

    renderHookWithProps({
      focusItemIndexOnMount: 0,
      getNextSelectableIndex: jest.fn().mockReturnValueOnce(null),
      updateActiveItemIndex: mockUpdateActiveItemIndex,
      setIsInitialFocusSet: mockSetIsInitialFocusSet
    });

    expect(mockUpdateActiveItemIndex).not.toHaveBeenCalled();
    expect(mockSetIsInitialFocusSet).not.toHaveBeenCalled();
  });
});
