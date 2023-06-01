import userEvent from "@testing-library/user-event";
import { render, screen, fireEvent, act } from '@testing-library/react';
import "@testing-library/jest-dom";
import Dialog from "../Dialog";

function renderVisibleDialogOnMount(dialogProps) {
  renderDialogOnMount({...dialogProps, shouldShowOnMount: true})
}

function renderDialogOnMount(dialogProps) {
  renderElementInsideContainer(<Dialog {...dialogProps}/>)
}

function renderElementInsideContainer(element) {
  const container =  document.createElement("div");
}

describe("Dialog tests", () => {
  describe("Callbacks", () => {
    it("should call onClickOutside callback when trigger", async () => {
      const onClickOutsideMock = jest.fn();
      renderVisibleDialogOnMount({onClickOutside: onClickOutsideMock, content: <div>Dialog</div>});
      userEvent.click(document.body);
      expect(onClickOutsideMock).toBeCalled();
    });
    it("should not call onClickOutside callback when clicking inside the dialog", async () => {
      const onClickOutsideMock = jest.fn();
      renderVisibleDialogOnMount({onClickOutside: onClickOutsideMock, content: <div>Dialog</div>});
      const dialog = await screen.findByText("Dialog");
      userEvent.click(dialog);
      expect(onClickOutsideMock).not.toBeCalled();
    });
  });
});
