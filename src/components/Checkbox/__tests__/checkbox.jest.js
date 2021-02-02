import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { Checkbox } from "../Checkbox";

describe("Checkbox Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Checkbox componentClassName="dummy-class-name" label="Option 1" name="checkbox" value="option1" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Checkbox />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when checked", () => {
      const tree = renderer.create(<Checkbox checked />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when disabled", () => {
      const tree = renderer.create(<Checkbox disabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("Integration Tests", () => {
    const formName = "myForm";
    const checkboxName = "checkbox";
    const option1Value = "1";
    const option1Text = "Option 1";

    const option2Value = "2";
    const option2Text = "Option 2";

    const option3Value = "3";
    const option3Text = "Option 3";

    beforeEach(() => {
      render(
        <form name={formName}>
          <Checkbox name={checkboxName} value={option1Value} label={option1Text} defaultChecked={true} />
          <Checkbox name={checkboxName} value={option2Value} label={option2Text} />
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
  });
});
