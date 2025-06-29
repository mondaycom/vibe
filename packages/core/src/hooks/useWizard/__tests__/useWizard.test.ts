import { vi, describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import useWizard from "../useWizard";

describe("useWizard", () => {
  it("should initialize with the correct initial step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3, initialStep: 1 }));
    expect(result.current.activeStep).toBe(1);
  });

  it("should initialize with step 0 if initial step is out of bounds", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3, initialStep: 5 }));
    expect(result.current.activeStep).toBe(0);
  });

  it("should correctly identify first step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3 }));
    expect(result.current.isFirstStep).toBe(true);

    act(() => {
      result.current.next();
    });
    expect(result.current.isFirstStep).toBe(false);
  });

  it("should correctly identify last step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3, initialStep: 2 }));
    expect(result.current.isLastStep).toBe(true);

    act(() => {
      result.current.back();
    });
    expect(result.current.isLastStep).toBe(false);
  });

  it("should increment step when next is called", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3 }));
    act(() => {
      result.current.next();
    });
    expect(result.current.activeStep).toBe(1);
  });

  it("should decrement step when back is called", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3, initialStep: 1 }));
    act(() => {
      result.current.back();
    });
    expect(result.current.activeStep).toBe(0);
  });

  it("should go to correct step when goToStep is called", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 5 }));
    act(() => {
      result.current.goToStep(3);
    });
    expect(result.current.activeStep).toBe(3);
  });

  it("should not go to an out-of-bounds step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3 }));
    act(() => {
      result.current.goToStep(5);
    });
    expect(result.current.activeStep).toBe(0);
  });

  it("should call onStepChange when step changes", () => {
    const onStepChange = vi.fn();
    const { result } = renderHook(() => useWizard({ stepCount: 3, onStepChange }));
    act(() => {
      result.current.next();
    });
    expect(onStepChange).toHaveBeenCalledWith(1, 0);
  });

  it("should call onFinish when reaching the last step and calling next", () => {
    const onFinish = vi.fn();
    const { result } = renderHook(() => useWizard({ stepCount: 3, onFinish }));
    act(() => {
      result.current.goToStep(2);
    });
    act(() => {
      result.current.next();
    });
    expect(onFinish).toHaveBeenCalled();
  });

  it("should not call onStepChange when reaching the last step and calling next", () => {
    const onStepChange = vi.fn();
    const { result } = renderHook(() => useWizard({ stepCount: 3, onStepChange }));
    act(() => {
      result.current.goToStep(2);
    });
    act(() => {
      result.current.next();
    });
    // 1 call when calling goToStep, no call when calling next
    expect(onStepChange).toHaveBeenCalledTimes(1);
  });

  it("should update direction correctly when moving forward and backward", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 4 }));
    expect(result.current.direction).toBe(undefined);

    act(() => {
      result.current.next();
    });
    expect(result.current.direction).toBe("forward");

    act(() => {
      result.current.back();
    });
    expect(result.current.direction).toBe("backward");

    act(() => {
      result.current.goToStep(2);
    });
    expect(result.current.direction).toBe("forward");
  });

  it("should not change step if next is called on last step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3, initialStep: 2 }));
    act(() => {
      result.current.next();
    });
    expect(result.current.activeStep).toBe(2);
  });

  it("should not change step if back is called on first step", () => {
    const { result } = renderHook(() => useWizard({ stepCount: 3 }));
    act(() => {
      result.current.back();
    });
    expect(result.current.activeStep).toBe(0);
  });
});
