import React from "react";
import { fireEvent, render, cleanup, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "@testing-library/react-hooks";
import TextField from "../TextField";

const TEST_ID = "test-text-field";

describe("TextField tests", () => {
  let inputComponent;
  let onChangeStub;
  const defaultPlaceHolder = "Place Holder Text";
  let ref;

  beforeEach(() => {
    cleanup();
    ref = {};
    onChangeStub = jest.fn();
    jest.useFakeTimers("modern");
    inputComponent = render(
      <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} ref={ref} />
    );
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it("on input mutate should call the callback stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  it("on input mutate should call the stub with the value", () => {
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input";
    act(() => {
      fireEvent.change(input, { target: { value } });
    });

    expect(onChangeStub).toHaveBeenCalledWith(
      value,
      expect.objectContaining({
        target: expect.objectContaining({
          value: value,
          id: TEST_ID
        })
      })
    );
  });

  it("should not change the value instantly when debounce value is provided", () => {
    const { rerender } = inputComponent;
    inputComponent = rerender(
      <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} debounceRate={200} />
    );
    const value = "Value of input";
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    fireEvent.change(input, { target: { value } });
    expect(onChangeStub.mock.calls.length).toBe(0);
  });

  it("should be able to forward ref", () => {
    const { rerender } = inputComponent;
    inputComponent = rerender(
      <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} debounceRate={200} ref={ref} />
    );
    expect(ref.current.className).toMatch("input");
  });

  it("should call the debounced function after time passed (fake timers)", async () => {
    const { rerender } = inputComponent;
    const debounceTime = 200;
    inputComponent = rerender(
      <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} debounceRate={debounceTime} />
    );
    const value = "A";
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    userEvent.type(input, value);
    expect(onChangeStub).not.toHaveBeenCalled();
    jest.advanceTimersByTime(debounceTime + 1);
    await waitFor(
      () =>
        expect(onChangeStub).toHaveBeenCalledWith(
          value,
          expect.objectContaining({
            target: expect.objectContaining({
              value: value,
              id: TEST_ID
            })
          })
        ),
      { timeout: debounceTime }
    );
  });

  it("should be disabled", () => {
    const { rerender } = inputComponent;
    inputComponent = rerender(
      <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} disabled />
    );
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    expect(input.disabled).toBeTruthy();
  });

  it("char count should display correctly after changing value", () => {
    const { rerender, queryByLabelText } = inputComponent;
    let value = "hello";
    rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} showCharCount value={value} />);
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    value = "Value of input";
    fireEvent.change(input, { target: { value } });
    const charCount = queryByLabelText("Place Holder Text");
    expect(parseInt(charCount.value.length)).toBe(value.length);
  });

  describe("autocomplete", () => {
    it("should add autocomplete attr and set it to on", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} autoComplete="on" />
      );
      const element = container.querySelector('[autocomplete="on"]');
      expect(element).toBeTruthy();
    });

    it("should add autocomplete attr and set it to off", () => {
      const { container } = render(
        <TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} autoComplete="off" />
      );
      const element = container.querySelector('[autocomplete="off"]');
      expect(element).toBeTruthy();
    });
  });

  it("should trim the value if trim is true", () => {
    const { rerender } = inputComponent;
    inputComponent = rerender(<TextField placeholder={defaultPlaceHolder} onChange={onChangeStub} id={TEST_ID} trim />);
    const input = screen.getByPlaceholderText(defaultPlaceHolder);
    const value = "Value of input      ";
    fireEvent.change(input, { target: { value } });
    expect(input.value).toBe(value.trim());
  });

  describe("a11y", () => {
    it("should add the aria label", () => {
      const ariaLabel = "aria label";
      const { getByLabelText } = render(<TextField inputAriaLabel={ariaLabel} />);
      const element = getByLabelText(ariaLabel);
      expect(element).toBeTruthy();
    });
  });
});
