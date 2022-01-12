import React from "react";
import { render, cleanup, waitFor, fireEvent, act } from "@testing-library/react";
import MenuItem from "../MenuItem";

const title = "Menu Item";
const originalRAF = window.requestAnimationFrame;

describe("<MenuItem />", () => {
  beforeEach(() => {
    window.requestAnimationFrame = fn => fn();
  });

  afterEach(() => {
    window.requestAnimationFrame = originalRAF;
    cleanup();
  });

  it("should be able to render menu item text", async () => {
    const { getByText } = render(<MenuItem title={title} />);
    const menuItemElement = getByText(title);
    await waitFor(() => expect(menuItemElement).toBeTruthy());
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
