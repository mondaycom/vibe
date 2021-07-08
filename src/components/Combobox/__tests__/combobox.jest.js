import React from "react";
import renderer from "react-test-renderer";
import Combobox from "../Combobox";

describe("<Combobox />", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Combobox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with one option", () => {
    const tree = renderer.create(<Combobox options={[{ id: "1", label: "Test" }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with options and categories", () => {
    const options = [
      { id: "1", label: "Test", categoryId: "category1" },
      { id: "2", label: "Test2", categoryId: "category2" },
      { id: "3", label: "Test3", categoryId: "category3" }
    ];
    const categories = {
      category1: { id: "category1" },
      category2: { id: "category2", label: "category2" },
      category3: { id: "category3", label: "category3", onlyShowOnSearch: true }
    };
    const tree = renderer.create(<Combobox options={options} categories={categories} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
