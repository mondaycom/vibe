import { renderHook, act } from "@testing-library/react-hooks";
import useNumberFieldState from "../useNumberFieldState";

describe("useNumberFieldState", () => {
  type HookProps = Parameters<typeof useNumberFieldState>[0];

  const setup = (props: Partial<HookProps> = {}) => {
    const onChange = jest.fn();
    const onValidityChange = jest.fn();
    const defaultProps: HookProps = {
      value: null,
      step: 1,
      onChange,
      onValidityChange,
      ...props
    };

    const { result, rerender } = renderHook(p => useNumberFieldState(p), {
      initialProps: defaultProps
    });

    return { result, rerender, onChange, onValidityChange, defaultProps };
  };

  it("should update inputValue when controlled value changes", () => {
    const { result, rerender, defaultProps } = setup({ value: 10 });
    expect(result.current.inputValue).toBe("10");

    rerender({ ...defaultProps, value: 20 });
    expect(result.current.inputValue).toBe("20");

    rerender({ ...defaultProps, value: null });
    expect(result.current.inputValue).toBe("");
  });

  it("should handle valid number input", () => {
    const { result, onChange } = setup({ value: 0 });
    act(() => {
      result.current.onChange({ target: { value: "123" } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe("123");
    expect(onChange).toHaveBeenCalledWith(123, expect.anything());
  });

  it("should handle empty string input", () => {
    const { result, onChange } = setup({ value: 10 });
    act(() => {
      result.current.onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe("");
    expect(onChange).toHaveBeenCalledWith(null, expect.anything());
  });

  it("should handle partial number input (e.g., '-')", () => {
    const { result, onChange } = setup({ value: 0 });
    act(() => {
      result.current.onChange({ target: { value: "-" } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe("-");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should handle partial number input with a dot (e.g., '1.')", () => {
    const { result, onChange } = setup({ value: 0 });
    act(() => {
      result.current.onChange({ target: { value: "1." } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe("1.");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should handle another partial number input with a dot (e.g., '.')", () => {
    const { result, onChange } = setup({ value: 0 });
    act(() => {
      result.current.onChange({ target: { value: "." } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe(".");
    expect(onChange).toHaveBeenCalledWith(0, expect.anything());
  });

  it("should ignore invalid text input", () => {
    const { result, onChange } = setup({ value: 5 });
    act(() => {
      result.current.onChange({ target: { value: "abc" } } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.inputValue).toBe("5");
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should clamp value to max if not out of bounds", () => {
    const { result, onChange } = setup({ value: 10, max: 100 });
    act(() => {
      result.current.onChange({
        target: { value: "120" }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledWith(100, expect.anything());
  });

  it("should clamp value to min if not out of bounds", () => {
    const { result, onChange } = setup({ value: 10, min: 0 });
    act(() => {
      result.current.onChange({
        target: { value: "-10" }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledWith(0, expect.anything());
  });

  it("should allow out of bounds value if configured", () => {
    const { result, onChange } = setup({ value: 110, max: 100, allowOutOfBounds: true });
    act(() => {
      result.current.onChange({
        target: { value: "120" }
      } as React.ChangeEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledWith(120, expect.anything());
  });

  it("should handle ArrowUp keydown to increment value", () => {
    const { result, onChange } = setup({ value: 5, step: 2 });
    act(() => {
      result.current.onKeyDown({ key: "ArrowUp", preventDefault: () => {} } as React.KeyboardEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledWith(7, expect.anything());
  });

  it("should handle ArrowDown keydown to decrement value", () => {
    const { result, onChange } = setup({ value: 5, step: 2 });
    act(() => {
      result.current.onKeyDown({ key: "ArrowDown", preventDefault: () => {} } as React.KeyboardEvent<HTMLInputElement>);
    });
    expect(onChange).toHaveBeenCalledWith(3, expect.anything());
  });

  it("should call onValidityChange when value changes", () => {
    const { rerender, onValidityChange, defaultProps } = setup({ value: 50, min: 0, max: 100 });
    expect(onValidityChange).toHaveBeenCalledWith(true);

    rerender({ ...defaultProps, value: 110, min: 0, max: 100 });
    expect(onValidityChange).toHaveBeenCalledWith(false);

    rerender({ ...defaultProps, value: -10, min: 0, max: 100 });
    expect(onValidityChange).toHaveBeenCalledWith(false);

    rerender({ ...defaultProps, value: null, min: 0, max: 100 });
    expect(onValidityChange).toHaveBeenCalledWith(true);
  });

  it("should correctly set isAtMin and isAtMax", () => {
    const { result, rerender, defaultProps } = setup({ value: 5, min: 0, max: 10 });
    expect(result.current.isAtMin).toBe(false);
    expect(result.current.isAtMax).toBe(false);

    rerender({ ...defaultProps, value: 0, min: 0, max: 10 });
    expect(result.current.isAtMin).toBe(true);
    expect(result.current.isAtMax).toBe(false);

    rerender({ ...defaultProps, value: 10, min: 0, max: 10 });
    expect(result.current.isAtMin).toBe(false);
    expect(result.current.isAtMax).toBe(true);
  });
});
