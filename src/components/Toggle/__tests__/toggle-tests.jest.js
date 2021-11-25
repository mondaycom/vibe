import React from "react";
import userEvent from "@testing-library/user-event";
import { render, cleanup } from "@testing-library/react";
import { expect as sinonExpect } from "../../../test/test-helpers";
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
          <Toggle isDefaultSelected />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeFalsy();
    });

    it("should change state to on when is default not selected and clicked", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isDefaultSelected={false} />
        </form>
      );
      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });

    it("should not change state when disabled, default selected and clicked", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isDisabled isDefaultSelected />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });
  });

  describe("a11y", () => {
    it("should add the aria label", () => {
      const ariaLabel = "Lable Name";;
      const { getByLabelText } = render(
        <Toggle ariaLabel={ariaLabel} />
      );
      const toggleComponent = getByLabelText(ariaLabel);
      sinonExpect(toggleComponent).to.be.ok;
    }); 
  });

  describe("Is selected mode", () => {
    afterEach(() => {
      cleanup();
    });

    it("should not change state to off when is selected, clicked and prop does not changed", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isSelected />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeTruthy();
    });

    it("should not change state to on when is not selected, clicked and prop does not changed", () => {
      const { getByRole } = render(
        <form name={formName}>
          <Toggle isSelected={false} />
        </form>
      );

      const toggle = getByRole(toggleRole);
      userEvent.click(toggle);
      expect(toggle.checked).toBeFalsy();
    });
  });
});
