import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import { expect as sinonExpect } from "../../../test/test-helpers";
import Checkbox from "../Checkbox";

describe("Checkbox tests", () => {
  const formName = "myForm";
  const checkboxName = "checkbox";

  const option1Value = "1";
  const option1Text = "Option 1";
  const option2Value = "2";
  const option2Text = "Option 2";
  const option3Value = "3";
  const option3Text = "Option 3";

  let onChangedMock;
  beforeEach(() => {
    onChangedMock = jest.fn();
    render(
      <form name={formName}>
        <Checkbox name={checkboxName} value={option1Value} label={option1Text} defaultChecked={true} />
        <Checkbox name={checkboxName} value={option2Value} label={option2Text} onChange={onChangedMock} />
        <Checkbox name={checkboxName} value={option3Value} label={option3Text} />
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

  it("should call the onchange callback when clicked", () => {
    const option2 = screen.getByLabelText(option2Text);
    fireEvent.click(option2);
    expect(onChangedMock.mock.calls.length).toBe(1);
  });

  describe("a11y", () => {
    it("should add the label", () => {
      const ariaLabel = "Lable Name";
      const { getByLabelText } = render(
        <Checkbox label={ariaLabel} />
      );
      const checkboxComponent = getByLabelText(ariaLabel);
      sinonExpect(checkboxComponent).to.be.ok;
    }); 
  });
});
