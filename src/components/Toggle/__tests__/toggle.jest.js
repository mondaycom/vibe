import React from "react";
import renderer from "react-test-renderer";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Toggle from "../Toggle";

describe("Toggle Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Toggle />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when selection defined by default selected (on) ", () => {
      const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isDefaultSelected />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when selection defined by default selected (off) ", () => {
      const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isDefaultSelected={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when selection defined by isSelected (on)", () => {
      const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isSelected />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when selection defined by isSelected (off)", () => {
      const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isSelected={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when disabled", () => {
      const tree = renderer.create(<Toggle isDisabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Integration Tests", () => {
    const formName = "myForm";
    const toggleRole = "switch";

    describe("Default selected mode", () => {
      afterEach(() => {
        cleanup();
      });

      it("should change state to off when is default selected and clicked", () => {
        before(() => {
          render(
            <form name={formName}>
              <Toggle componentClassName="dummy-class-name" isDefaultSelected />
            </form>
          );
        });

        const toggle = screen.getByRole(toggleRole);
        fireEvent.click(toggle);
        expect(toggle.checked).toBeFalsy();
      });

      it("should change state to on when is default not selected and clicked", () => {
        before(() => {
          render(
            <form name={formName}>
              <Toggle componentClassName="dummy-class-name" isDefaultSelected={false} />
            </form>
          );
        });

        const toggle = screen.getByRole(toggleRole);
        fireEvent.click(toggle);
        expect(toggle.checked).toBeTruthy();
      });

      it("should not change state when disabled, default selected and clicked", () => {
        before(() => {
          render(
            <form name={formName}>
              <Toggle componentClassName="dummy-class-name" isDefaultSelected isDisabled />
            </form>
          );
        });

        const toggle = screen.getByRole(toggleRole);
        fireEvent.click(toggle);
        expect(toggle.checked).toBeTruthy();
      });
    });

    describe("Is selected mode", () => {
      afterEach(() => {
        cleanup();
      });

      it("should not change state to off when is selected, clicked and prop does not changed", () => {
        before(() => {
          render(
            <form name={formName}>
              <Toggle componentClassName="dummy-class-name" isSelected />
            </form>
          );
        });

        const toggle = screen.getByRole(toggleRole);
        fireEvent.click(toggle);
        expect(toggle.checked).toBeTruthy();
      });

      it("should not change state to on when is not selected, clicked and prop does not changed", () => {
        before(() => {
          render(
            <form name={formName}>
              <Toggle componentClassName="dummy-class-name" isSelected={false} />
            </form>
          );
        });

        const toggle = screen.getByRole(toggleRole);
        fireEvent.click(toggle);
        expect(toggle.checked).toBeFalsy();
      });
    });
  });
});
