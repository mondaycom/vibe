import React from "react";
import { render, fireEvent, cleanup, screen, act } from "@testing-library/react";
import TextField, { ARIA_LABELS } from "../TextField";

describe("TextField Tests", () => {
  let inputComponent;
  let onChangeStub;
  const defaultPlaceHolder = "Place Holder Text";
  let ref;
  beforeEach(() => {
    cleanup();
    ref = { current: null };
    onChangeStub = jest.fn();
    jest.useFakeTimers("modern");
    act(() => {
      inputComponent = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" ref={ref} />
      );
    });
  });
  afterEach(() => {
    jest.useRealTimers();
    cleanup();
  });

  it("should display placeholder", () => {
    expect(screen.getByPlaceholderText(defaultPlaceHolder)).toBeTruthy();
  });

  it("on input mutate should call the callback stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    expect(input.value).toBe(value);
  });

  it("on input mutate should call the stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    expect(onChangeStub.mock.calls[0][0]).toEqual(value);
  });

  it("should not change the value instantly when debounce value is provided", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" debounceRate={200} />
      );
    });

    const value = "Value of input";
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    act(() => {
      fireEvent.change(input, { target: { value } });
    });

    expect(onChangeStub.mock.calls.length).toEqual(0);
  });

  it("should be able to forward ref", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" debounceRate={200} ref={ref} />
      );
    });
    expect(ref.current.classList.contains("input-component__input")).toBeTruthy();
  });

  it("should call the debounced function after time passed (fake timers)", () => {
    const { rerender } = inputComponent;
    const debounceTime = 200;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" debounceRate={debounceTime} />
      );
    });

    const value = "Value of input";
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    jest.advanceTimersByTime(debounceTime + 1);
    expect(onChangeStub.mock.calls.length).toEqual(1);
  });

  it("should be disabled", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled />
      );
    });
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    expect(input).toBeDisabled;
  });

  it("title should be available", () => {
    const { rerender, getByText } = inputComponent;
    const title = "Title";
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled title={title} />);
    });
    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
  });

  it("title should not be available", () => {
    const { rerender, queryByText } = inputComponent;
    const title = "My Awesome Title";
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled />);
    });
    const titleElement = queryByText(title);
    expect(titleElement).toBeFalsy();
  });

  it("should display an icon", () => {
    const iconNames = { primary: "Primary Icon" };
    const { rerender, queryByLabelText } = inputComponent;
    act(() => {
      rerender(
        <TextField
          placeholder={defaultPlaceHolder}
          onChange={onChangeStub}
          id="test"
          iconName="test"
          iconsNames={iconNames}
        />
      );
    });

    const icon = queryByLabelText(iconNames.primary);
    expect(icon).toBeTruthy();
  });

  it("should not display icon", () => {
    const { rerender, queryByLabelText } = inputComponent;
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" />);
    });

    const icon = queryByLabelText("test-icon");
    expect(icon).toBeFalsy();
  });

  describe("char count", () => {
    it("should display char count on initial", () => {
      const { rerender, queryByLabelText } = inputComponent;
      const value = "hello";
      act(() => {
        rerender(
          <TextField
            placeholder={defaultPlaceHolder}
            onChange={onChangeStub}
            id="char-count-test"
            showCharCount
            value={value}
          />
        );
      });

      const charCount = queryByLabelText(ARIA_LABELS.CHAR);
      expect(parseInt(charCount.innerHTML, 10)).toBe(value.length);
    });

    it("char count should display correctly after changing value", () => {
      const { rerender, queryByLabelText } = inputComponent;
      let value = "hello";
      act(() => {
        rerender(
          <TextField
            placeholder={defaultPlaceHolder}
            onChange={onChangeStub}
            id="char-count-test"
            showCharCount
            value={value}
          />
        );
      });

      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      value = "Value of input";
      act(() => {
        fireEvent.change(input, { target: { value } });
      });

      const charCount = queryByLabelText(ARIA_LABELS.CHAR);
      expect(parseInt(charCount.innerHTML, 10)).toEqual(value.length);
    });
  });

  describe("validation text", () => {
    it("should not show validation", () => {
      const { queryByLabelText } = inputComponent;
      const validationTextNode = queryByLabelText(ARIA_LABELS.VALIDATION_TEXT);
      expect(validationTextNode).toBeNull();
    });
  });

  describe("types", () => {
    it("default type should be text", () => {
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe(TextField.types.TEXT);
    });

    it("type should be password", () => {
      const { rerender } = inputComponent;
      act(() => {
        inputComponent = rerender(
          <TextField
            placeholder={defaultPlaceHolder}
            onChange={onChangeStub}
            id="test"
            type={TextField.types.PASSWORD}
          />
        );
      });
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe(TextField.types.PASSWORD);
    });
  });
  describe("autocomplete", () => {
    it("should add autocomplete attr and set it to on", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" autoComplete="on" />
      );
      const element = container.querySelector('[autocomplete="on"]');
      expect(element).toBeTruthy();
    });

    it("should add autocomplete attr and set it to off", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" autoComplete="off" />
      );
      const element = container.querySelector('[autocomplete="off"]');
      expect(element).toBeTruthy();
    });
  });

  it("should trim the value if trim is true", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" trim />);
    });
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input      ";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    expect(input.value).toBe(value.trim());
  });
});
