import React from "react";
import { sinon, expect } from "../../test/test-helpers";
import TextField, { ARIA_LABELS } from "./TextField";
import { render, fireEvent, cleanup, screen, act } from "@testing-library/react";

describe("TextField Tests", () => {
  let inputComponent;
  let onChangeStub;
  let defaultPlaceHolder = "Place Holder Text";
  let clock;
  let ref;
  beforeEach(() => {
    cleanup();
    ref = {};
    onChangeStub = sinon.stub();
    clock = sinon.useFakeTimers();
    act(() => {
      inputComponent = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" ref={ref} />
      );
    });
  });
  afterEach(() => {
    onChangeStub.reset();
    clock.restore();
    cleanup();
  });

  it("should display placeholder", () => {
    expect(screen.getByPlaceholderText(defaultPlaceHolder)).to.be.ok;
  });

  it("on input mutate should call the callback stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    expect(input.value).to.equal(value);
  });

  it("on input mutate should call the stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });
    expect(onChangeStub).to.be.calledWith(value);
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

    expect(onChangeStub).to.not.be.called;
  });

  it("should be able to forward ref", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" debounceRate={200} ref={ref} />
      );
    });
    expect(ref.current.className).to.include("input-component__input");
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
    clock.tick(debounceTime + 1);
    expect(onChangeStub).to.be.called;
  });

  it("should be disabled", () => {
    const { rerender } = inputComponent;
    act(() => {
      inputComponent = rerender(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled />
      );
    });
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    expect(input.disabled).to.be.ok;
  });

  it("title should be available", () => {
    const { rerender, getByText } = inputComponent;
    const title = "Title";
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled title={title} />);
    });
    const titleElement = getByText(title);
    expect(titleElement).to.be.ok;
  });

  it("title should not be available", () => {
    const { rerender, queryByText } = inputComponent;
    const title = "My Awesome Title";
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" disabled />);
    });
    const titleElement = queryByText(title);
    expect(titleElement).to.not.be.ok;
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
    expect(icon).to.be.ok;
  });

  it("should not display icon", () => {
    const { rerender, queryByLabelText } = inputComponent;
    act(() => {
      rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" />);
    });

    const icon = queryByLabelText("test-icon");
    expect(icon).to.not.be.ok;
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
      expect(parseInt(charCount.innerText, 10)).to.be.equal(value.length);
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
      expect(parseInt(charCount.innerText, 10)).to.be.equal(value.length);
    });
  });

  describe("validation text", () => {
    it("should not show validation", () => {
      const { queryByLabelText } = inputComponent;
      const validationTextNode = queryByLabelText(ARIA_LABELS.VALIDATION_TEXT);
      expect(validationTextNode).to.equal(null);
    });
  });

  describe("types", () => {
    it("default type should be text", () => {
      const input = screen.getByPlaceholderText(defaultPlaceHolder);
      expect(input.type).to.equal(TextField.types.TEXT);
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
      expect(input.type).to.equal(TextField.types.PASSWORD);
    });
  });
  describe("autocomplete", () => {
    it("should add autocomplete attr and set it to on", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" autoComplete="on" />
      );
      const element = container.querySelector('[autocomplete="on"]');
      expect(element).to.be.ok;
    });

    it("should add autocomplete attr and set it to off", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id="test" autoComplete="off" />
      );
      const element = container.querySelector('[autocomplete="off"]');
      expect(element).to.be.ok;
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
    expect(input.value).to.equal(value.trim());
  });
});
