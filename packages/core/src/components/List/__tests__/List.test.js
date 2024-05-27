import React from "react";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "../List";
import ListItem from "../../ListItem/ListItem";

describe("List", () => {
  it("renders correctly without props", () => {
    const tree = renderer.create(<List />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer.create(<List>Something</List>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with list items", () => {
    const tree = renderer
      .create(
        <List>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
        </List>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("accessibility tests", () => {
    it("List should have role listbox", () => {
      const { getByRole } = render(
        <List>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
        </List>
      );
      expect(getByRole("listbox")).toBeInTheDocument();
    });

    it("ListItem should have role option", () => {
      const { getAllByRole } = render(
        <List>
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
        </List>
      );
      expect(getAllByRole("option")).toHaveLength(2);
    });

    it("disabled ListItem should have aria-selected", () => {
      const { getByTestId } = render(
        <List>
          <ListItem data-testid="list-item-1" disabled>
            1
          </ListItem>
          <ListItem data-testid="list-item-2">1</ListItem>
        </List>
      );
      expect(getByTestId("list-item-1")).toHaveAttribute("aria-disabled", "true");
      expect(getByTestId("list-item-2")).toHaveAttribute("aria-disabled", "false");
    });

    it("selected ListItem should have aria-selected", () => {
      const { getByTestId } = render(
        <List>
          <ListItem data-testid="list-item-1" selected>
            1
          </ListItem>
          <ListItem data-testid="list-item-2">1</ListItem>
        </List>
      );
      expect(getByTestId("list-item-1")).toHaveAttribute("aria-selected", "true");
      expect(getByTestId("list-item-2")).not.toHaveAttribute("aria-selected");
    });

    it("List should have aria-activedescendant", () => {
      const { getByRole } = render(
        <List>
          <ListItem id="list-item-1">1</ListItem>
          <ListItem id="list-item-2" selected>
            2
          </ListItem>
        </List>
      );
      expect(getByRole("listbox")).toHaveAttribute("aria-activedescendant", "list-item-2");
    });

    it("List aria-activedescendant", () => {
      const { getByRole } = render(
        <List id="list">
          <ListItem>1</ListItem>
          <ListItem>2</ListItem>
          <ListItem selected>3</ListItem>
        </List>
      );
      const list = getByRole("listbox");
      expect(list).toHaveAttribute("aria-activedescendant", "list-item-2");
      userEvent.tab();
      userEvent.keyboard("{arrowup}");
      expect(list).toHaveAttribute("aria-activedescendant", "list-item-1");
    });
  });
});
