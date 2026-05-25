import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor, within } from "@testing-library/react";
import Dialog, { type DialogProps } from "../Dialog";

function renderVisibleDialogOnMount(dialogProps: DialogProps) {
  return renderDialogOnMount({ ...dialogProps, shouldShowOnMount: true });
}

function renderDialogOnMount(dialogProps: DialogProps) {
  return render(<Dialog {...dialogProps} />);
}

describe("Dialog tests", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  describe("Callbacks", () => {
    it("should call onClickOutside callback when click outside", async () => {
      const onClickOutsideMock = vi.fn();
      renderVisibleDialogOnMount({ onClickOutside: onClickOutsideMock, content: <div>Dialog</div> });
      userEvent.click(document.body);
      expect(onClickOutsideMock).toBeCalled();
    });

    it("should not call onClickOutside callback when clicking inside the dialog", async () => {
      const onClickOutsideMock = vi.fn();
      renderVisibleDialogOnMount({ onClickOutside: onClickOutsideMock, content: <div>Dialog</div> });
      const dialog = await screen.findByText("Dialog");
      userEvent.click(dialog);
      expect(onClickOutsideMock).not.toBeCalled();
    });

    it("should call onDialogDidShow callback when dialog is shown", async () => {
      const onDialogDidShowMock = vi.fn();
      renderVisibleDialogOnMount({
        onDialogDidShow: onDialogDidShowMock,
        content: <div>Dialog</div>,
        shouldCallbackOnMount: true
      });
      vi.runAllTimers();
      expect(onDialogDidShowMock).toBeCalled();
    });

    it("should call onDialogDidHide callback when dialog is hidden", async () => {
      const onDialogDidHideMock = vi.fn();
      const { container } = render(
        <Dialog
          shouldShowOnMount
          onDialogDidHide={onDialogDidHideMock}
          content={<div>Dialog</div>}
          showTrigger={["click"]}
          hideTrigger={["click"]}
        >
          <button type="button">Toggle</button>
        </Dialog>
      );
      vi.runAllTimers();

      const button = within(container).getByText("Toggle");
      await userEvent.click(button);
      vi.runAllTimers();
      await waitFor(() => expect(onDialogDidHideMock).toBeCalled());
    });

    it("should call onContentClick callback when clicking inside dialog", async () => {
      const onContentClickMock = vi.fn();
      renderVisibleDialogOnMount({ onContentClick: onContentClickMock, content: <div>Dialog Content</div> });
      const dialog = await screen.findByText("Dialog Content");
      await userEvent.click(dialog);
      expect(onContentClickMock).toBeCalled();
    });
  });

  describe("Show/Hide Triggers", () => {
    it("should show dialog on click when showTrigger is click", async () => {
      const { container } = render(
        <Dialog showTrigger={["click"]} content={<div>Dialog Content</div>}>
          <button type="button">Click Me</button>
        </Dialog>
      );

      expect(screen.queryByText("Dialog Content")).not.toBeInTheDocument();

      const button = within(container).getByText("Click Me");
      await userEvent.click(button);
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Dialog Content")).toBeInTheDocument());
    });

    it("should show dialog on mouseenter when showTrigger is mouseenter", async () => {
      const { container } = render(
        <Dialog showTrigger={["mouseenter"]} hideTrigger={["mouseleave"]} content={<div>Hover Content</div>}>
          <div>Hover Me</div>
        </Dialog>
      );

      expect(screen.queryByText("Hover Content")).not.toBeInTheDocument();

      const trigger = within(container).getByText("Hover Me");
      await userEvent.hover(trigger);
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Hover Content")).toBeInTheDocument());
    });

    it("should show dialog on focus when showTrigger is focus", async () => {
      const { container } = render(
        <Dialog showTrigger={["focus"]} hideTrigger={["blur"]} content={<div>Focus Content</div>}>
          <input placeholder="Focus Me" />
        </Dialog>
      );

      expect(screen.queryByText("Focus Content")).not.toBeInTheDocument();

      const input = within(container).getByPlaceholderText("Focus Me");
      input.focus();
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Focus Content")).toBeInTheDocument());
    });

    it("should hide dialog on mouseleave when hideTrigger is mouseleave", async () => {
      const { container } = render(
        <Dialog
          shouldShowOnMount
          showTrigger={["mouseenter"]}
          hideTrigger={["mouseleave"]}
          content={<div>Hover Content</div>}
        >
          <div>Hover Me</div>
        </Dialog>
      );
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Hover Content")).toBeInTheDocument());

      const trigger = within(container).getByText("Hover Me");
      await userEvent.unhover(trigger);
      vi.runAllTimers();

      await waitFor(() => expect(screen.queryByText("Hover Content")).not.toBeInTheDocument());
    });

    it("should hide dialog on blur when hideTrigger is blur", async () => {
      const onDialogDidHideMock = vi.fn();
      const { container } = render(
        <Dialog
          shouldShowOnMount
          showTrigger={["focus"]}
          hideTrigger={["blur"]}
          onDialogDidHide={onDialogDidHideMock}
          instantShowAndHide={true}
          content={<div>Focus Content</div>}
        >
          <input placeholder="Focus Me" />
        </Dialog>
      );

      await waitFor(() => expect(screen.getByText("Focus Content")).toBeInTheDocument());

      const input = within(container).getByPlaceholderText("Focus Me");
      input.focus();

      // Trigger blur by focusing something else
      await userEvent.tab();

      await waitFor(() => expect(onDialogDidHideMock).toBeCalled());
    });
  });

  describe("Keyboard Interactions", () => {
    it("should hide dialog on Escape key when hideTrigger includes esckey", async () => {
      render(
        <Dialog shouldShowOnMount showTrigger={["click"]} hideTrigger={["esckey"]} content={<div>Press Escape</div>}>
          <button type="button">Toggle</button>
        </Dialog>
      );
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Press Escape")).toBeInTheDocument());

      await userEvent.keyboard("{Escape}");
      vi.runAllTimers();

      await waitFor(() => expect(screen.queryByText("Press Escape")).not.toBeInTheDocument());
    });

    it("should trigger enter event on Enter key", async () => {
      const onDialogDidHideMock = vi.fn();
      const { container } = render(
        <Dialog
          shouldShowOnMount
          showTrigger={["click"]}
          hideTrigger={["enter"]}
          onDialogDidHide={onDialogDidHideMock}
          content={<div>Press Enter</div>}
        >
          <button type="button">Toggle</button>
        </Dialog>
      );
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Press Enter")).toBeInTheDocument());

      const button = within(container).getByText("Toggle");
      button.focus();
      await userEvent.keyboard("{Enter}");
      vi.runAllTimers();

      await waitFor(() => expect(onDialogDidHideMock).toBeCalled());
    });
  });

  describe("Delay Behavior", () => {
    it("should respect showDelay when showing dialog", async () => {
      const onDialogDidShowMock = vi.fn();
      const { container } = render(
        <Dialog
          showDelay={500}
          showTrigger={["click"]}
          onDialogDidShow={onDialogDidShowMock}
          content={<div>Delayed</div>}
        >
          <button type="button">Click</button>
        </Dialog>
      );

      const button = within(container).getByText("Click");
      await userEvent.click(button);

      // Should not show immediately
      expect(onDialogDidShowMock).not.toBeCalled();

      // Advance timers by 500ms
      vi.advanceTimersByTime(500);

      await waitFor(() => expect(onDialogDidShowMock).toBeCalled());
    });

    it("should respect hideDelay when hiding dialog", async () => {
      const onDialogDidHideMock = vi.fn();
      const { container } = render(
        <Dialog
          shouldShowOnMount
          hideDelay={300}
          showTrigger={["click"]}
          hideTrigger={["click"]}
          onDialogDidHide={onDialogDidHideMock}
          content={<div>Delayed Hide</div>}
        >
          <button type="button">Click</button>
        </Dialog>
      );
      vi.runAllTimers();

      const button = within(container).getByText("Click");
      await userEvent.click(button);

      // Should not hide immediately
      expect(onDialogDidHideMock).not.toBeCalled();

      // Advance timers by 300ms
      vi.advanceTimersByTime(300);

      await waitFor(() => expect(onDialogDidHideMock).toBeCalled());
    });

    it("should cancel show timeout when hiding is triggered", async () => {
      const onDialogDidShowMock = vi.fn();
      const { container } = render(
        <Dialog
          showDelay={500}
          showTrigger={["mouseenter"]}
          hideTrigger={["mouseleave"]}
          onDialogDidShow={onDialogDidShowMock}
          content={<div>Hover</div>}
        >
          <div>Hover Me</div>
        </Dialog>
      );

      const trigger = within(container).getByText("Hover Me");

      // Start hovering
      await userEvent.hover(trigger);
      vi.advanceTimersByTime(200);

      // Stop hovering before showDelay completes
      await userEvent.unhover(trigger);
      vi.runAllTimers();

      // Should not have shown
      expect(onDialogDidShowMock).not.toBeCalled();
    });
  });

  describe("Controlled Mode", () => {
    it("should show dialog when open prop is true", async () => {
      render(
        <Dialog open={true} content={<div>Controlled Open</div>}>
          <button type="button">Reference</button>
        </Dialog>
      );

      await waitFor(() => expect(screen.getByText("Controlled Open")).toBeInTheDocument());
    });

    it("should hide dialog when open prop is false", async () => {
      const { rerender } = render(
        <Dialog open={true} content={<div>Controlled</div>}>
          <button type="button">Reference</button>
        </Dialog>
      );

      await waitFor(() => expect(screen.getByText("Controlled")).toBeInTheDocument());

      rerender(
        <Dialog open={false} content={<div>Controlled</div>}>
          <button type="button">Reference</button>
        </Dialog>
      );

      expect(screen.queryByText("Controlled")).not.toBeInTheDocument();
    });
  });

  describe("Positioning", () => {
    it("should render dialog with top position", async () => {
      renderVisibleDialogOnMount({
        position: "top",
        content: <div data-testid="dialog-content">Top Dialog</div>
      });

      const dialogContent = await screen.findByTestId("dialog-content");
      expect(dialogContent).toBeInTheDocument();
    });

    it("should render dialog with bottom position", async () => {
      renderVisibleDialogOnMount({ position: "bottom", content: <div>Bottom Dialog</div> });

      await waitFor(() => expect(screen.getByText("Bottom Dialog")).toBeInTheDocument());
    });

    it("should render dialog with left position", async () => {
      renderVisibleDialogOnMount({ position: "left", content: <div>Left Dialog</div> });

      await waitFor(() => expect(screen.getByText("Left Dialog")).toBeInTheDocument());
    });

    it("should render dialog with right position", async () => {
      renderVisibleDialogOnMount({ position: "right", content: <div>Right Dialog</div> });

      await waitFor(() => expect(screen.getByText("Right Dialog")).toBeInTheDocument());
    });
  });

  describe("Disable Prop", () => {
    it("should not show dialog when disable is true", async () => {
      const { container } = render(
        <Dialog disable={true} showTrigger={["click"]} content={<div>Disabled Dialog</div>}>
          <button type="button">Click</button>
        </Dialog>
      );

      const button = within(container).getByText("Click");
      await userEvent.click(button);
      vi.runAllTimers();

      expect(screen.queryByText("Disabled Dialog")).not.toBeInTheDocument();
    });
  });

  describe("Animation", () => {
    it("should apply expand animation by default", async () => {
      renderVisibleDialogOnMount({ content: <div>Animated</div> });
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Animated")).toBeInTheDocument());
    });

    it("should apply opacity-and-slide animation when specified", async () => {
      renderVisibleDialogOnMount({ animationType: "opacity-and-slide", content: <div>Slide Animated</div> });
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("Slide Animated")).toBeInTheDocument());
    });

    it("should prevent animation on mount when preventAnimationOnMount is true", async () => {
      renderVisibleDialogOnMount({ preventAnimationOnMount: true, content: <div>No Animation</div> });
      vi.runAllTimers();

      await waitFor(() => expect(screen.getByText("No Animation")).toBeInTheDocument());
    });
  });

  describe("Event Handler Chaining", () => {
    it("should chain onClick handlers", async () => {
      const dialogOnClickMock = vi.fn();
      const childOnClickMock = vi.fn();

      const { container } = render(
        <Dialog showTrigger={["click"]} onClick={dialogOnClickMock} content={<div>Content</div>}>
          <button type="button" onClick={childOnClickMock}>
            Click Both
          </button>
        </Dialog>
      );

      const button = within(container).getByText("Click Both");
      await userEvent.click(button);

      expect(dialogOnClickMock).toBeCalled();
      expect(childOnClickMock).toBeCalled();
    });

    it("should chain onMouseEnter handlers", async () => {
      const dialogOnMouseEnterMock = vi.fn();
      const childOnMouseEnterMock = vi.fn();

      const { container } = render(
        <Dialog showTrigger={["mouseenter"]} onMouseEnter={dialogOnMouseEnterMock} content={<div>Content</div>}>
          <div onMouseEnter={childOnMouseEnterMock}>Hover</div>
        </Dialog>
      );

      const trigger = within(container).getByText("Hover");
      await userEvent.hover(trigger);

      expect(dialogOnMouseEnterMock).toBeCalled();
      expect(childOnMouseEnterMock).toBeCalled();
    });
  });

  describe("Instant Show and Hide", () => {
    it("should show and hide instantly when instantShowAndHide is true", async () => {
      const onDialogDidShowMock = vi.fn();
      const onDialogDidHideMock = vi.fn();

      const { container } = render(
        <Dialog
          instantShowAndHide
          showTrigger={["click"]}
          hideTrigger={["click"]}
          onDialogDidShow={onDialogDidShowMock}
          onDialogDidHide={onDialogDidHideMock}
          content={<div>Instant</div>}
        >
          <button type="button">Toggle</button>
        </Dialog>
      );

      const button = within(container).getByText("Toggle");

      // Show
      await userEvent.click(button);
      expect(onDialogDidShowMock).toBeCalled();

      // Hide
      await userEvent.click(button);
      expect(onDialogDidHideMock).toBeCalled();
    });
  });
});
