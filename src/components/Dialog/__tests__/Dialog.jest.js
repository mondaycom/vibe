import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Dialog from "../Dialog";

describe("Dialog tests", () => {
  describe("Click outside", () => {
    it("should call onClickOutside and close dialog", async () => {
      const onClickOutsideMock = jest.fn();
      const element = document.createElement("div");
      document.body.appendChild(element);

      render(<Dialog onClickOutside={onClickOutsideMock} content={<div>Dialog</div>} shouldShowOnMount />, {
        baseElement: element
      });

      await screen.findByText("Dialog");

      userEvent.click(document.body);

      expect(onClickOutsideMock).toBeCalled();
      expect(screen.findByText("Dialog")).not.toBeInTheDocument;
    });
  });
});
