import React from "react";
import renderer from "react-test-renderer";
import Combobox from "../Combobox";

describe("Combobox renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Combobox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Combobox className="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Combobox id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with placeholder", () => {
    const tree = renderer.create(<Combobox placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with another noResultsMessage", () => {
    const tree = renderer.create(<Combobox noResultsMessage="no test text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Combobox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with size", () => {
    const tree = renderer.create(<Combobox size={Combobox.sizes.LARGE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with optionLineHeight", () => {
    const tree = renderer.create(<Combobox optionLineHeight={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with optionsListHeight", () => {
    const tree = renderer.create(<Combobox optionsListHeight={50} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with autoFocus", () => {
    const tree = renderer.create(<Combobox autoFocus />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with loading", () => {
    const tree = renderer.create(<Combobox loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with divider", () => {
    const options = [
      { id: "1", label: "Option 1", categoryId: "cat1" },
      { id: "2", label: "Option 2", categoryId: "cat2" }
    ];

    const categories = {
      cat1: {
        id: "cat1",
        label: "cat1"
      },
      cat2: {
        id: "cat2",
        label: "cat2"
      }
    };
    const tree = renderer.create(<Combobox options={options} categories={categories} withCategoriesDivider />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with optionRenderer", () => {
    const options = [
      { id: "1", label: "Option 1" },
      { id: "2", label: "Option 2" }
    ];
    const optionRenderer = option => <div>some render of {option.label}</div>;
    const tree = renderer.create(<Combobox options={options} optionRenderer={optionRenderer} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
