import { renderHook, act } from "@testing-library/react-hooks";
import useSpinButtonHandlers from "../useSpinButtonHandlers";

describe("useSpinButtonHandlers", () => {
  const setup = (props: Partial<Parameters<typeof useSpinButtonHandlers>[0]>) => {
    const onChange = jest.fn();
    const defaultProps = {
      value: 0,
      step: 1,
      ...props,
      onChange
    };

    const { result, rerender } = renderHook(p => useSpinButtonHandlers(p), {
      initialProps: defaultProps
    });
    return { result, rerender, onChange };
  };

  it("should call onChange with the correctly stepped value on increment", () => {
    const { result, onChange } = setup({ value: 5, step: 2 });
    act(() => {
      result.current.onIncrement({} as React.MouseEvent);
    });
    expect(onChange).toHaveBeenCalledWith(7, expect.anything());
  });

  it("should call onChange with the correctly stepped value on decrement", () => {
    const { result, onChange } = setup({ value: 10, step: 3 });
    act(() => {
      result.current.onDecrement({} as React.MouseEvent);
    });
    expect(onChange).toHaveBeenCalledWith(7, expect.anything());
  });

  it("should ignore constraints when allowOutOfBounds is true", () => {
    const { result, onChange } = setup({ value: 10, step: 1, max: 10, allowOutOfBounds: true });
    act(() => {
      result.current.onIncrement({} as React.MouseEvent);
    });
    expect(onChange).toHaveBeenCalledWith(11, expect.anything());
  });

  it("should not call onChange when readOnly", () => {
    const { result, onChange } = setup({ value: 5, readOnly: true });
    act(() => {
      result.current.onIncrement({} as React.MouseEvent);
      result.current.onDecrement({} as React.MouseEvent);
    });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should handle null values correctly", () => {
    const { result, onChange } = setup({ value: null, step: 1 });
    act(() => {
      result.current.onIncrement({} as React.MouseEvent);
    });
    expect(onChange).toHaveBeenCalledWith(1, expect.anything());

    act(() => {
      result.current.onDecrement({} as React.MouseEvent);
    });
    expect(onChange).toHaveBeenCalledWith(-1, expect.anything());
  });
});
