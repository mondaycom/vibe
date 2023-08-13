import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import ListItem from "../ListItem";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItem data-testid="list-item" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with selected", () => {
  const tree = renderer.create(<ListItem data-testid="list-item" selected />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with disabled", () => {
  const tree = renderer.create(<ListItem data-testid="list-item" disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with size", () => {
  const tree = renderer.create(<ListItem data-testid="list-item" size={ListItem.sizes.LARGE} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with selected and disabled", () => {
  const tree = renderer.create(<ListItem data-testid="list-item" selected disabled />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("BDD List Item", () => {
  let onClick;
  const itemText = "My item";
  beforeEach(() => {
    onClick = jest.fn();
  });
  it("should call onClick", () => {
    const { getByText } = render(
      <ListItem data-testid="list-item" onClick={onClick}>
        {itemText}
      </ListItem>
    );
    const element = getByText(itemText);
    fireEvent.click(element);
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call on key down (Enter)", () => {
    const { getByText } = render(
      <ListItem data-testid="list-item" onClick={onClick}>
        {itemText}
      </ListItem>
    );
    const element = getByText(itemText);
    fireEvent.keyDown(element, { key: "Enter", code: "Enter", charCode: "13" });
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call on key down (Space)", () => {
    const { getByText } = render(
      <ListItem data-testid="list-item" onClick={onClick}>
        {itemText}
      </ListItem>
    );
    const element = getByText(itemText);
    fireEvent.keyDown(element, { key: " ", code: "Space", charCode: "32" });
    expect(onClick.mock.calls.length).toBe(1);
  });

  it("should call onClick", () => {
    const { getByText } = render(
      <ListItem data-testid="list-item" disabled onClick={onClick}>
        {itemText}
      </ListItem>
    );
    const element = getByText(itemText);
    fireEvent.click(element);
    expect(onClick.mock.calls.length).toBe(0);
  });
});
