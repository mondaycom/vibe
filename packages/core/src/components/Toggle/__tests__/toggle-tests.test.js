import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup } from "@testing-library/react";
import Toggle from "../Toggle";

describe("Toggle tests", () => {
  const formName = "myForm";
  const toggleRole = "switch";

  describe("Default selected mode", () => {
    afterEach(() => {
      cleanup();
    });

    it("should change state to off when is default selected and clicked", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isDefaultSelected ariaLabel="My Toggle" />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeFalsy();
    });

    it("should change state to on when is default not selected and clicked", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isDefaultSelected={false} ariaLabel="My Toggle" />
        </form>
      );
      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });

    it("should not change state when disabled, default selected and clicked", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle disabled isDefaultSelected ariaLabel="My Toggle" />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });

    it("should click on toggle trigger on change event with the right parameters", () => {
      const onClickMock = jest.fn();
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isDefaultSelected onChange={onClickMock} />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(onClickMock).toHaveBeenCalledWith(false);
    });
  });

  it("should click on toggle trigger on change event with the right parameters - controlerd state", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(
      <form name={formName}>
        <Toggle isSelected onChange={onClickMock} />
      </form>
    );

    const toggle = getByRole(toggleRole);
    userEvent.click(toggle);
    expect(onClickMock).toHaveBeenCalledWith(false);
  });

  describe("a11y", () => {
    it("should add the aria label", () => {
      const ariaLabel = "Lable Name";
      const { getByLabelText } = render(<Toggle ariaLabel={ariaLabel} />);
      const toggleComponent = getByLabelText(ariaLabel);
      expect(toggleComponent).toBeTruthy();
    });
  });

  describe("Is selected mode", () => {
    afterEach(() => {
      cleanup();
    });

    it("should not change state to off when is selected, clicked and prop does not changed", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isSelected ariaLabel="My Toggle" />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });

    it("should not change state to on when is not selected, clicked and prop does not changed", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isSelected={false} ariaLabel="My Toggle" />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeFalsy();
    });
  });
});
