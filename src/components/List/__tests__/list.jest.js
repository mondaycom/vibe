import React from "react";
import renderer from "react-test-renderer";
import List from "../List";
import ListItem from "../../ListItem/ListItem";

describe("List", () => {
  it("renders correctly without props", () => {
    const tree = renderer.create(<List id="list" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer.create(<List id="list">Something</List>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with list items", () => {
    const tree = renderer
      .create(
        <List id="list">
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
        </List>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
