import { vi, beforeEach, afterEach, beforeAll, afterAll, describe, it, expect, Mock } from "vitest";
import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import Checkbox from "../Checkbox";

vi.mock("../../../utils/user-agent-utils", () => {
  return {
    isFirefox: vi.fn()
  };
});

function createCheckboxesVariables() {
  return {
    formName: "myForm",
    checkbox1Name: "checkbox1",
    option1Value: "1",
    option1Text: "Option 1",
    checkbox2Name: "checkbox2",
    option2Value: "2",
    option2Text: "Option 2",
    checkbox3Name: "checkbox3",
    option3Value: "3",
    option3Text: "Option 3"
  };
}

type RenderHelper = {
  formName: string;
  checkbox1Name: string;
  option1Value: string;
  option1Text: string;
  onChangeMock1: Mock;
  checkbox2Name: string;
  option2Text: string;
  option2Value: string;
  onChangeMock2: Mock;
  checkbox3Name: string;
  option3Text: string;
  option3Value: string;
  onChangeMock3: Mock;
  defaultChecked?: boolean;
  autoFocus?: boolean;
};

function renderCheckboxes({
  formName,
  checkbox1Name,
  option1Value,
  option1Text,
  onChangeMock1,
  checkbox2Name,
  option2Text,
  option2Value,
  onChangeMock2,
  checkbox3Name,
  option3Text,
  option3Value,
  onChangeMock3,
  defaultChecked,
  autoFocus
}: RenderHelper) {
  render(
    <form name={formName}>
      <Checkbox
        name={checkbox1Name}
        value={option1Value}
        label={option1Text}
        defaultChecked={defaultChecked}
        onChange={onChangeMock1}
        autoFocus={autoFocus}
      />
      <Checkbox name={checkbox2Name} value={option2Value} label={option2Text} onChange={onChangeMock2} />
      <Checkbox name={checkbox3Name} value={option3Value} label={option3Text} onChange={onChangeMock3} />
    </form>
  );
}

function testUnselectFirstOption(
  option1Text: string,
  option2Text: string,
  option3Text: string,
  clickOptions?: Record<string, unknown>
) {
  const option1 = screen.getByLabelText<HTMLInputElement>(option1Text);
  const option2 = screen.getByLabelText<HTMLInputElement>(option2Text);
  const option3 = screen.getByLabelText<HTMLInputElement>(option3Text);
  fireEvent.click(option1, clickOptions);
  expect(option1.checked).toBeFalsy();
  expect(option2.checked).toBeFalsy();
  expect(option3.checked).toBeFalsy();
}

describe("Checkbox tests", () => {
  const {
    formName,
    checkbox1Name,
    option1Value,
    option1Text,
    checkbox2Name,
    option2Value,
    option2Text,
    checkbox3Name,
    option3Value,
    option3Text
  } = createCheckboxesVariables();

  let onChangeMock1: Mock, onChangeMock2: Mock, onChangeMock3: Mock;

  describe("regular checkbox tests with default checked", () => {
    beforeEach(() => {
      onChangeMock1 = vi.fn();
      onChangeMock2 = vi.fn();
      onChangeMock3 = vi.fn();

      renderCheckboxes({
        formName,
        onChangeMock1,
        onChangeMock2,
        onChangeMock3,
        option3Text,
        option3Value,
        option2Text,
        option2Value,
        option1Text,
        option1Value,
        checkbox1Name,
        checkbox2Name,
        checkbox3Name,
        defaultChecked: true
      });
    });

    afterEach(() => {
      cleanup();
    });

    it("should default select 1st option", () => {
      const option1 = screen.getByLabelText<HTMLInputElement>(option1Text);
      const option2 = screen.getByLabelText<HTMLInputElement>(option2Text);
      const option3 = screen.getByLabelText<HTMLInputElement>(option3Text);
      expect(option1.checked).toBeTruthy();
      expect(option2.checked).toBeFalsy();
      expect(option3.checked).toBeFalsy();
    });

    // eslint-disable-next-line vitest/expect-expect
    it("should unselect 1st option", () => {
      testUnselectFirstOption(option1Text, option2Text, option3Text);
    });

    it("should default select 1st option and should select 2nd option", () => {
      const option1 = screen.getByLabelText<HTMLInputElement>(option1Text);
      const option2 = screen.getByLabelText<HTMLInputElement>(option2Text);
      const option3 = screen.getByLabelText<HTMLInputElement>(option3Text);
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

  describe("regular checkbox tests with no default checked", () => {
    it("should auto focus 1st checkbox", () => {
      renderCheckboxes({
        formName,
        onChangeMock1,
        onChangeMock2,
        onChangeMock3,
        option3Text,
        option3Value,
        option2Text,
        option2Value,
        option1Text,
        option1Value,
        checkbox1Name,
        checkbox2Name,
        checkbox3Name,
        autoFocus: true
      });

      const option1 = screen.getByLabelText<HTMLInputElement>(option1Text);
      const option2 = screen.getByLabelText<HTMLInputElement>(option2Text);
      const option3 = screen.getByLabelText<HTMLInputElement>(option3Text);
      expect(option1).toHaveFocus();
      expect(option2).not.toHaveFocus();
      expect(option3).not.toHaveFocus();
    });
  });

  describe("specific firefox checkbox tests", () => {
    const {
      formName,
      checkbox1Name,
      option1Value,
      option1Text,
      checkbox2Name,
      option2Value,
      option2Text,
      checkbox3Name,
      option3Value,
      option3Text
    } = createCheckboxesVariables();

    beforeAll(() => {
      vi.mock("../../../utils/user-agent-utils", () => {
        return {
          isFirefox: vi.fn().mockImplementation(() => true)
        };
      });
    });

    afterAll(() => {
      vi.mock("../../../utils/user-agent-utils", () => {
        return {
          isFirefox: vi.fn()
        };
      });
    });

    let onChangeMock1: Mock, onChangeMock2: Mock, onChangeMock3: Mock;

    beforeEach(() => {
      onChangeMock1 = vi.fn();
      onChangeMock2 = vi.fn();
      onChangeMock3 = vi.fn();
      renderCheckboxes({
        formName,
        onChangeMock1,
        onChangeMock2,
        onChangeMock3,
        option3Text,
        option3Value,
        option2Text,
        option2Value,
        option1Text,
        option1Value,
        checkbox1Name,
        checkbox2Name,
        checkbox3Name,
        defaultChecked: true
      });
    });

    // eslint-disable-next-line vitest/expect-expect
    it("should unselect  1st option (with firefox browser - check workaround for known firefox bug", () => {
      testUnselectFirstOption(option1Text, option2Text, option3Text, { shiftKey: true });
    });

    it("should call on change with shiftKey true when unselect option with shift key (with firefox browser - check workaround for known firefox bug", () => {
      let isShift = false;
      onChangeMock1.mockImplementation((e: React.KeyboardEvent) => {
        isShift = e.nativeEvent.shiftKey;
      });
      const option1 = screen.getByLabelText(option1Text);
      fireEvent.click(option1, { shiftKey: true });
      expect(isShift).toBeTruthy();
    });
  });
});
