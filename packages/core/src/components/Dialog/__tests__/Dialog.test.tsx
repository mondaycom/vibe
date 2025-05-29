import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Dialog, { DialogProps } from "../Dialog";

function renderVisibleDialogOnMount(dialogProps: DialogProps) {
  renderDialogOnMount({ ...dialogProps, shouldShowOnMount: true });
}

function renderDialogOnMount(dialogProps: DialogProps) {
  render(<Dialog {...dialogProps} />);
}

describe("Dialog tests", () => {
  describe("Callbacks", () => {
    it("should call onClickOutside callback when click outside", async () => {
      const onClickOutsideMock = jest.fn();
      renderVisibleDialogOnMount({ onClickOutside: onClickOutsideMock, content: <div>Dialog</div> });
      userEvent.click(document.body);
      expect(onClickOutsideMock).toBeCalled();
    });
    it("should not call onClickOutside callback when clicking inside the dialog", async () => {
      const onClickOutsideMock = jest.fn();
      renderVisibleDialogOnMount({ onClickOutside: onClickOutsideMock, content: <div>Dialog</div> });
      const dialog = await screen.findByText("Dialog");
      userEvent.click(dialog);
      expect(onClickOutsideMock).not.toBeCalled();
    });
  });

  describe("autoFocus with FocusLock", () => {
    it("should focus the first focusable element within dialog when autoFocus is true", async () => {
      const buttonText = "Focus Me";
      render(
        <Dialog 
          shouldShowOnMount 
          autoFocus 
          content={ // Content for FocusLock to find a focusable element
            <div>
              <p>Some text</p>
              <button type="button">{buttonText}</button>
              <input type="text" aria-label="another focusable" />
            </div>
          }
        >
          <span>trigger</span>
        </Dialog>
      );
      
      // react-focus-lock might take a moment to apply focus to the first focusable element
      const focusableButton = await screen.findByText(buttonText);
      expect(focusableButton).toHaveFocus();
    });

    it("should not auto-focus dialog content when autoFocus is false", async () => {
      const buttonText = "Focus Me If AutoFocused";
      const triggerButtonText = "Open Dialog For No AutoFocus Test";
      // Keep a ref to an element outside the dialog to check if focus remains outside
      const outerButtonRef = React.createRef<HTMLButtonElement>();

      render(
        <>
          <button ref={outerButtonRef} type="button">Button Outside</button>
          <Dialog 
            autoFocus={false} 
            content={
              <div>
                <button type="button">{buttonText}</button>
              </div>
            }
            showTrigger={["click"]}
            hideTrigger={[]} // Keep it simple for testing focus on open
          >
            <button type="button">{triggerButtonText}</button>
          </Dialog>
        </>
      );
      
      const trigger = screen.getByText(triggerButtonText);
      outerButtonRef.current?.focus(); // Ensure focus is outside before dialog opens
      expect(outerButtonRef.current).toHaveFocus();

      userEvent.click(trigger); // Open the dialog

      // Wait for dialog to be visible and any potential focus shifts to settle
      const focusableButtonInDialog = await screen.findByText(buttonText);
      expect(focusableButtonInDialog).not.toHaveFocus();
      // Check if focus remained on the button that opened it or returned to body/outer button
      // For this specific test, if it's not on the dialog content, it's a pass for autoFocus=false.
      // Depending on how FocusLock and dialog interactions are set, focus might go to the trigger or body.
      // A more robust check might be that document.activeElement is NOT within the dialog.
      expect(document.body).toHaveFocus(); // Or expect(trigger).toHaveFocus(); if that's the behavior
    });
  });
});
