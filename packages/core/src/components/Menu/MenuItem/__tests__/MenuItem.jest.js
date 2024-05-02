import React from "react";
import { render, waitFor, fireEvent, act } from "@testing-library/react";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";

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
