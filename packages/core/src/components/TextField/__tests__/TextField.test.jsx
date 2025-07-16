import { vi, beforeEach, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import TextField from "../TextField";
import { TextFieldAriaLabel } from "../TextFieldConstants";

describe("TextField Tests", () => {
  let inputComponent;
  let onChangeStub;
  const defaultPlaceHolder = "Place Holder Text";
  let ref;
  beforeEach(() => {
    cleanup();
    ref = { current: null };
    onChangeStub = vi.fn();
    vi.useFakeTimers("modern");
    act(() => {
      inputComponent = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" ref={ref} />
      );
    });
  });
  afterEach(() => {
    vi.useRealTimers();
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
    expect(ref.current.classList.contains("input")).toBeTruthy();
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
    vi.advanceTimersByTime(debounceTime + 1);
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
    expect(input).toBeDisabled();
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
    const title = "My Awesome Heading";
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

  describe("char count and limit", () => {
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

      const charCount = queryByLabelText(TextFieldAriaLabel.CHAR);
      expect(parseInt(charCount.innerHTML, 10)).toBe(value.length);
    });

    it("should display char count and max length on initial", () => {
      const { rerender, getByText } = inputComponent;
      const value = "hello";
      act(() => {
        rerender(
          <TextField
            placeholder={defaultPlaceHolder}
            onChange={onChangeStub}
            id="char-count-test"
            showCharCount
            value={value}
            maxLength={10}
          />
        );
      });

      expect(getByText(`${value.length}/10`)).toBeTruthy();
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

      const charCount = queryByLabelText(TextFieldAriaLabel.CHAR);
      expect(parseInt(charCount.innerHTML, 10)).toEqual(value.length);
    });

    it("should prevent typing when character limit is reached and allowExceedingMaxLength is false", () => {
      const { rerender } = inputComponent;
      act(() => {
        rerender(
          <TextField placeholder={defaultPlaceHolder} showCharCount maxLength={5} allowExceedingMaxLength={false} />
        );
      });

      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      // This correctly tests the maxLength attribute be properly set on the input element
      // Using fireEvent bypasses the maxLength where a user wouldn't:
      // https://github.com/testing-library/user-event/issues/591#issuecomment-517816296
      expect(input).toHaveAttribute("maxlength", "5");
    });

    it("should allow typing beyond character limit when allowExceedingMaxLength is true", () => {
      const { rerender, getByText } = inputComponent;
      act(() => {
        rerender(
          <TextField placeholder={defaultPlaceHolder} showCharCount maxLength={5} allowExceedingMaxLength={true} />
        );
      });

      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      act(() => {
        fireEvent.change(input, { target: { value: "123456" } });
      });

      expect(input).toHaveValue("123456");
      expect(input).not.toHaveAttribute("maxlength");

      expect(getByText("6/5")).toBeTruthy();
    });
  });

  describe("validation text", () => {
    it("should not show validation", () => {
      const { queryByLabelText } = inputComponent;
      const validationTextNode = queryByLabelText(TextFieldAriaLabel.VALIDATION_TEXT);
      expect(validationTextNode).toBeNull();
    });
  });

  describe("types", () => {
    it("default type should be text", () => {
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe("text");
    });

    it("type should be password", () => {
      const { rerender } = inputComponent;
      act(() => {
        inputComponent = rerender(
          <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" type="password" />
        );
      });
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe("password");
    });

    it("type should be tel", () => {
      const { rerender } = inputComponent;
      act(() => {
        inputComponent = rerender(
          <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" type="tel" />
        );
      });
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe("tel");
    });

    it("type should be url", () => {
      const { rerender } = inputComponent;
      act(() => {
        inputComponent = rerender(
          <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" type="url" />
        );
      });
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe("url");
    });

    it("type should be email", () => {
      const { rerender } = inputComponent;
      act(() => {
        inputComponent = rerender(
          <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" type="email" />
        );
      });
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).toBe("email");
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

  describe("controlled", () => {
    it("should call onChange with the new value when controlled is true", () => {
      const handleChange = vi.fn();
      render(<TextField placeholder="Enter text" onChange={handleChange} value="value" controlled />);

      const input = screen.getByPlaceholderText("Enter text");
      expect(input.value).toBe("value");

      fireEvent.change(input, { target: { value: "new value" } });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith("new value", expect.anything());
    });
  });
});
