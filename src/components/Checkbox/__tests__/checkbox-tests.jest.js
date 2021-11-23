import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

describe("Checkbox tests", () => {
  const formName = "myForm";

  const checkbox1Name = "checkbox1";
  const option1Value = "1";
  const option1Text = "Option 1";
  
  const checkbox2Name = "checkbox2";
  const option2Value = "2";
  const option2Text = "Option 2";

  const checkbox3Name = "checkbox3";
  const option3Value = "3";
  const option3Text = "Option 3";

  let onChangeMock1;
  let onChangeMock2;
  let onChangeMock3;

  beforeEach(() => {
    onChangeMock1 = jest.fn();
    onChangeMock2 = jest.fn();
    onChangeMock3 = jest.fn();

    render(
      <form name={formName}>
        <Checkbox
          name={checkbox1Name}
          value={option1Value}
          label={option1Text}
          defaultChecked={true}
          onChange={onChangeMock1}
        />
        <Checkbox name={checkbox2Name} value={option2Value} label={option2Text} onChange={onChangeMock2} />
        <Checkbox name={checkbox3Name} value={option3Value} label={option3Text} onChange={onChangeMock3} />
      </form>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("should default select 1st option", () => {
    const option1 = screen.getByLabelText(option1Text);
    const option2 = screen.getByLabelText(option2Text);
    const option3 = screen.getByLabelText(option3Text);
    expect(option1.checked).toBeTruthy();
    expect(option2.checked).toBeFalsy();
    expect(option3.checked).toBeFalsy();
  });

  it("should unselect  1st option", () => {
    const option1 = screen.getByLabelText(option1Text);
    const option2 = screen.getByLabelText(option2Text);
    const option3 = screen.getByLabelText(option3Text);
    fireEvent.click(option1);
    expect(option1.checked).toBeFalsy();
    expect(option2.checked).toBeFalsy();
    expect(option3.checked).toBeFalsy();
  });

  it("should default select 1st option and should select 2nd option", () => {
    const option1 = screen.getByLabelText(option1Text);
    const option2 = screen.getByLabelText(option2Text);
    const option3 = screen.getByLabelText(option3Text);
    fireEvent.click(option2);
    expect(option1.checked).toBeTruthy();
    expect(option2.checked).toBeTruthy();
    expect(option3.checked).toBeFalsy();
  });

  it("should call the onChange callback when clicked", () => {
    const option1 = screen.getByLabelText(option1Text);
    const option2 = screen.getByLabelText(option2Text);
    fireEvent.click(option1);
    fireEvent.click(option2);
    expect(onChangeMock1.mock.calls.length).toBe(1);
    expect(onChangeMock2.mock.calls.length).toBe(1);
    expect(onChangeMock3.mock.calls.length).toBe(0);
  });

  describe("a11y", () => {
    it("should add the label", () => {
      const ariaLabel = "Lable Name";
      const { getByLabelText } = render(<Checkbox label={ariaLabel} />);
      const checkboxComponent = getByLabelText(ariaLabel);
      expect(checkboxComponent).toBeTruthy();
    });

    it("should be the same text", () => {
      const ariaLabel = "Lable Name";
      const { getByText } = render(<Checkbox label={ariaLabel} />);
      const checkboxComponentText = getByText(ariaLabel);
      expect(checkboxComponentText).toBeTruthy();
    });
  });
});
