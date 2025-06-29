import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Dropdown from "../Dropdown";
import DropdownDriver from "./driver";
import { person1 } from "../../Avatar/__stories__/assets";
import { Email } from "@vibe/icons";

const mockOptions = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

describe("Dropdown renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Dropdown className="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with placeholder", () => {
    const tree = renderer.create(<Dropdown placeholder="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Dropdown disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when readOnly", () => {
    const tree = renderer.create(<Dropdown readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("without clear button", () => {
    const tree = renderer.create(<Dropdown clearable={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when rtl", () => {
    const tree = renderer.create(<Dropdown rtl />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with options", () => {
    const tree = renderer.create(<Dropdown options={mockOptions} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Dropdown placeholidder="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with autoFocus", () => {
    const tree = renderer.create(<Dropdown autoFocus />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multi", () => {
    const tree = renderer.create(<Dropdown multi />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multi and disabled", () => {
    const tree = renderer
      .create(<Dropdown multi disabled options={mockOptions} defaultValue={[mockOptions[0], mockOptions[1]]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multi and readonly", () => {
    const tree = renderer
      .create(<Dropdown multi readOnly options={mockOptions} defaultValue={[mockOptions[0], mockOptions[1]]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multiline", () => {
    const tree = renderer.create(<Dropdown multiline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with leftAvatar", () => {
    const options = [
      {
        value: "ocean",
        label: "Ocean",
        leftAvatar: person1
      }
    ];
    const tree = renderer.create(<Dropdown options={options} defaultValue={[options[0]]} multi multiline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with chip colors", () => {
    const options = [
      {
        value: "primary",
        label: "Primary",
        chipColor: Dropdown.chipColors.PRIMARY
      },
      {
        value: "positive",
        label: "Positive",
        chipColor: Dropdown.chipColors.POSITIVE
      },
      {
        value: "negative",
        label: "Negative",
        chipColor: Dropdown.chipColors.NEGATIVE
      }
    ];
    const tree = renderer.create(<Dropdown options={options} defaultValue={options} multi multiline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with leftIcon", () => {
    const options = [
      {
        value: "ocean",
        label: "Ocean",
        leftIcon: Email
      }
    ];
    const tree = renderer.create(<Dropdown options={options} defaultValue={[options[0]]} multi multiline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tabIndex", () => {
    const tree = renderer.create(<Dropdown tabIndex={9999} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Dropdown value={mockOptions[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with defaultValue", () => {
    const tree = renderer.create(<Dropdown defaultValue={mockOptions[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tooltipContent", () => {
    const tree = renderer.create(<Dropdown tooltipContent="tooltip content" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("snapshot driver", () => {
    it("should render correctly with empty props", () => {
      const component = new DropdownDriver();

      expect(component.snapshot).toMatchSnapshot();
    });

    it("should render correctly for the different sizes", () => {
      Object.values(Dropdown.sizes).forEach(size => {
        const component = new DropdownDriver().withSize(size).withPlaceholder();

        expect(component.snapshot).toMatchSnapshot();
      });
    });

    it("should use virtualization if set", async () => {
      const component = new DropdownDriver().withOpenMenuOnClick().withOpenMenuOnFocus().withVirtualizedOptions();

      // Wait for useEffect to finish
      await component.renderWithEffects();
      component.focusInput();

      expect(component.snapshot).toMatchSnapshot();
    });

    it("should use async if set", () => {
      const component = new DropdownDriver().withAsyncOptions().withDefaultOptions();

      component.focusInput();

      expect(component.snapshot).toMatchSnapshot();
    });

    it("should open menu on focus if set", () => {
      const component = new DropdownDriver().withOpenMenuOnClick().withOptions();

      component.focusInput();

      expect(component.snapshot).toMatchSnapshot();
    });

    it("should open menu on click if set", () => {
      const component = new DropdownDriver().withOpenMenuOnClick().withOptions();

      component.clickInput();

      expect(component.snapshot).toMatchSnapshot();
    });
  });
});
