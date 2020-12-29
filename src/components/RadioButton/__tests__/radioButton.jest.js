import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import RadioButton from "../RadioButton";

describe("RadioButton Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<RadioButton componentClassName="dummy-class-name" name="radios" value="option1" text="Option 1" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<RadioButton />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Integration Tests", () => {
    const formName = "myForm";
    const radiosName = "radios";
    const option1Value = "1";
    const option1Text = "Option 1";

    const option2Value = "2";
    const option2Text = "Option 2";

    const option3Value = "3";
    const option3Text = "Option 3";

    beforeEach(() => {
      render(
        <form name={formName}>
          <RadioButton name={radiosName} value={option1Value} text={option1Text} defaultChecked={true} />
          <RadioButton name={radiosName} value={option2Value} text={option2Text} />
          <RadioButton name={radiosName} value={option3Value} text={option3Text} />
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

    it("should select 2nd option", () => {
      const option1 = screen.getByLabelText(option1Text);
      const option2 = screen.getByLabelText(option2Text);
      const option3 = screen.getByLabelText(option3Text);
      fireEvent.click(option2);
      expect(option1.checked).toBeFalsy();
      expect(option2.checked).toBeTruthy();
      expect(option3.checked).toBeFalsy();
    });
  });
});
