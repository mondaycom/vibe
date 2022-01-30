import { renderHook } from "@testing-library/react-hooks";
import { useAdjacentSelectableMenuIndex } from "../useAdjacentSelectableMenuIndex";

describe("useAdjacentSelectableMenuIndex", () => {
  const ENABLED_SELECTABLE_CHILD = { type: { isSelectable: true }, props: {} };
  const DISABLED_SELECTABLE_CHILD = { type: { isSelectable: true }, props: { disabled: true } };
  const ENABLED_NON_SELECTABLE_CHILD = { type: {}, props: {} };

  describe("getNextSelectableIndex", () => {
    it("should return the same index if there is only one child", () => {
      const children = [ENABLED_SELECTABLE_CHILD];
      const currentIndex = 0;
      const expectedResult = 0;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getNextSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the third index if there are three items and the second index is selected", () => {
      const children = [ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 1;
      const expectedResult = 2;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getNextSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the first index if there are three children and the third index is selected", () => {
      const children = [ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 2;
      const expectedResult = 0;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getNextSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the third index if there are three children, the first one is active and the second one is disabled", () => {
      const children = [ENABLED_SELECTABLE_CHILD, DISABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 0;
      const expectedResult = 2;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getNextSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the first index if there are three children, the second is active and the third one is no selectable", () => {
      const children = [ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_NON_SELECTABLE_CHILD];
      const currentIndex = 1;
      const expectedResult = 0;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getNextSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });
  });

  describe("getPreviousSelectableIndex", () => {
    it("should return the null if there is only one child", () => {
      const children = [ENABLED_SELECTABLE_CHILD];
      const currentIndex = 0;
      const expectedResult = null;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getPreviousSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the second index if there are three items and the third index is selected", () => {
      const children = [ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 2;
      const expectedResult = 1;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getPreviousSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the third index if there are three children and the first index is selected", () => {
      const children = [ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 0;
      const expectedResult = 2;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getPreviousSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the first index if there are three children, the third one is active and the second one is disabled", () => {
      const children = [ENABLED_SELECTABLE_CHILD, DISABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 2;
      const expectedResult = 0;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getPreviousSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });

    it("should return the third index if there are three children, the second is active and the first one is no selectable", () => {
      const children = [ENABLED_NON_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD, ENABLED_SELECTABLE_CHILD];
      const currentIndex = 1;
      const expectedResult = 2;

      const { result: hookResult } = renderHookForTest(children);
      const result = hookResult.current.getPreviousSelectableIndex(currentIndex);

      expect(result).toEqual(expectedResult);
    });
  });

  function renderHookForTest(children) {
    return renderHook(() => useAdjacentSelectableMenuIndex({ children }));
  }
});
