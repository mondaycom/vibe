import React from "react";
import { render, waitFor, fireEvent, act, within } from "@testing-library/react";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import { Label } from "../../../Label";

const title = "Menu Item";

describe("<MenuItem />", () => {
  it("should be able to render menu item text", async () => {
    const { getAllByText } = render(<MenuItem title={title} />);
    const menuItemElement = getAllByText(title);
    await waitFor(() => expect(menuItemElement).toBeTruthy());
  });

  it("should not show subMenu when MenuItem is disabled", () => {
    const { queryAllByText } = render(
      <MenuItem disabled index={0} activeItemIndex={0} title="Main Item" isParentMenuVisible hasOpenSubMenu>
        <Menu>
          <MenuItem title="Sub Item" />
        </Menu>
      </MenuItem>
    );

    expect(queryAllByText("Sub Item")).toHaveLength(0);
  });

  const submenuPositions = [
    {
      submenuPosition: "left",
      expectedPosition: "left-start"
    },
    {
      submenuPosition: undefined,
      expectedPosition: "right-start"
    }
  ];
  it.each(submenuPositions)(
    "should open the submenu on correct position",
    async ({ submenuPosition, expectedPosition }) => {
      const title = "Main Item";
      const submenuTitle = "Sub Item";

      const { queryAllByText, container } = render(
        <MenuItem
          index={0}
          activeItemIndex={0}
          title={title}
          isParentMenuVisible
          submenuPosition={submenuPosition}
          hasOpenSubMenu
        >
          <Menu>
            <MenuItem title={submenuTitle} />
          </Menu>
        </MenuItem>
      );
      const menuItemElement = queryAllByText(title)[0];
      await act(async () => {
        fireEvent.mouseEnter(menuItemElement);
      });

      await waitFor(() => {
        const subMenuElement = container.querySelector("[data-popper-placement]");
        expect(subMenuElement).toBeVisible();
        expect(subMenuElement).toHaveAttribute("data-popper-placement", expectedPosition);
      });
    }
  );

  it("should render Label when pass a string", () => {
    const labelText = "Label Text";
    const { getByText } = render(<MenuItem title={title} label={labelText} />);
    const labelElement = getByText(labelText);
    expect(labelElement).toBeTruthy();
  });

  it("should render the Label component with props when pass a component", () => {
    const labelText = "Label Text";
    const { getByTestId } = render(
      <MenuItem title={title} label={<Label text={labelText} color="dark" kind="line" />} />
    );
    const labelElement = getByTestId("label");
    expect(labelElement).toBeTruthy();
    const { getAllByTestId } = within(labelElement);
    const labelTextElement = getAllByTestId("text")[0];
    expect(labelTextElement).toHaveClass("colorDark");
    expect(labelTextElement).toHaveClass("kindLine");
  });

  describe.skip("click", () => {
    it("should call the callback on click", async () => {
      const onClick = jest.fn();
      const { getByText } = render(<MenuItem title={title} onClick={onClick} index={1} activeItemIndex={1} />);

      const menuItemElement = getByText(title);
      await act(() => {
        fireEvent.mouseEnter(menuItemElement);
        fireEvent.click(menuItemElement);
      });

      await waitFor(() => expect(onClick.mock.calls.length).toEqual(1));
    });
  });
});
