import { act, cleanup, renderHook, RenderResult } from "@testing-library/react-hooks";
import useSwitch, { UseSwitchProps } from "../index";
import { ChangeEvent } from "react";

describe("useSwitch", () => {
  afterEach(() => {
    cleanup();
  });

  describe("with no props supplied", () => {
    it("should default isChecked value to false", () => {
      const { result } = renderHookForTest();
      expect(result.current.isChecked).toBe(false);
    });

    it("should update isChecked after onChange trigger", () => {
      const { result } = renderHookForTest();
      callOnChange(result);
      expect(result.current.isChecked).toBe(true);
    });
  });

  describe("with overridden isChecked", () => {
    it("should return initial isChecked", () => {
      const { result } = renderHookForTest({ isChecked: true });
      expect(result.current.isChecked).toBe(true);
    });

    it("should not update isChecked after onChange trigger", () => {
      const { result } = renderHookForTest({ isChecked: true });
      callOnChange(result);
      expect(result.current.isChecked).toBe(true);
    });
  });

  describe("with initial defaultChecked set to true", () => {
    it("should return isChecked as initial default", () => {
      const { result } = renderHookForTest({ defaultChecked: true });
      expect(result.current.isChecked).toBe(true);
    });

    it("should update isChecked after onChange trigger", () => {
      const { result } = renderHookForTest({ defaultChecked: true });
      callOnChange(result);
      expect(result.current.isChecked).toBe(false);
    });
  });

  describe("with disabled prop", () => {
    it("should return defaultChecked isChecked", () => {
      const { result } = renderHookForTest({ isDisabled: true, defaultChecked: true });
      expect(result.current.isChecked).toBe(true);
    });

    it("should not update isChecked after onChange trigger", () => {
      const { result } = renderHookForTest({ isDisabled: true, defaultChecked: true });
      callOnChange(result);
      expect(result.current.isChecked).toBe(true);
    });
  });

  describe("onChange", () => {
    const onChange = jest.fn();

    it("should not call onChange on initial rendering", () => {
      renderHookForTest({ defaultChecked: true, onChange });
      expect(onChange).toBeCalledTimes(0);
    });

    it("should call onChange exactly once with new value", () => {
      const { result } = renderHookForTest({ defaultChecked: true, onChange });
      callOnChange(result);
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(false);
    });
  });

  function renderHookForTest(props?: UseSwitchProps) {
    return renderHook<UseSwitchProps, ReturnType<typeof useSwitch>>(() => useSwitch(props));
  }

  function callOnChange(result: RenderResult<ReturnType<typeof useSwitch>>) {
    const mockEvent = {} as ChangeEvent<HTMLInputElement>;
    act(() => {
      result.current.onChange(mockEvent);
    });
  }
});
