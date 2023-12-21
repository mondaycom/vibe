import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import RadioButton from "../RadioButton";

describe("RadioButton tests", () => {
  const formName = "myForm";
  const radiosName = "radios";

  const option1Value = "1";
  const option1Text = "Option 1";
  const option2Value = "2";
  const option2Text = "Option 2";
  const option3Value = "3";
  const option3Text = "Option 3";

  let onChangeMock1: jest.Mock;
  let onChangeMock2: jest.Mock;
  let onChangeMock3: jest.Mock;

  beforeEach(() => {
    onChangeMock1 = jest.fn();
    onChangeMock2 = jest.fn();
    onChangeMock3 = jest.fn();

    render(
      <form name={formName}>
        <RadioButton
          name={radiosName}
          value={option1Value}
          text={option1Text}
          onSelect={onChangeMock1}
          defaultChecked={true}
        />
        <RadioButton name={radiosName} value={option2Value} text={option2Text} onSelect={onChangeMock2} />
        <RadioButton name={radiosName} value={option3Value} text={option3Text} onSelect={onChangeMock3} />
      </form>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should default select 1st option", () => {
    const option1: HTMLInputElement = screen.getByLabelText(option1Text);
    const option2: HTMLInputElement = screen.getByLabelText(option2Text);
    const option3: HTMLInputElement = screen.getByLabelText(option3Text);
    expect(option1.checked).toBeTruthy();
    expect(option2.checked).toBeFalsy();
    expect(option3.checked).toBeFalsy();
  });

  it("should select 2nd option", () => {
    const option1: HTMLInputElement = screen.getByLabelText(option1Text);
    const option2: HTMLInputElement = screen.getByLabelText(option2Text);
    const option3: HTMLInputElement = screen.getByLabelText(option3Text);
    fireEvent.click(option2);
    expect(option1.checked).toBeFalsy();
    expect(option2.checked).toBeTruthy();
    expect(option3.checked).toBeFalsy();
  });

  it("should call the onChange callback when clicked", () => {
    const option2 = screen.getByLabelText(option2Text);
    fireEvent.click(option2);
    expect(onChangeMock2.mock.calls.length).toBe(1);
    expect(onChangeMock2.mock.calls[0]).toBeTruthy();
  });

  it("should be the same text", () => {
    const text = "test text";
    const { getByText } = render(<RadioButton text={text} />);
    const radioButtonComponentText = getByText(text);
    expect(radioButtonComponentText).toBeTruthy();
  });
});
