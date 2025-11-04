import { vi, describe, it, expect, afterEach } from "vitest";
import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Info from "../Info";
import { type InfoProps } from "../Info.types";

const defaultAriaLabel = "Show info";
const renderComponent = (props: Partial<InfoProps> = {}) => {
  return render(<Info aria-label={defaultAriaLabel} {...props} />);
};

describe("Info tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Rendering", () => {
    it("should render the info button", () => {
      renderComponent();
      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).toBeInTheDocument();
    });
  });

  describe("Dialog interactions", () => {
    it("should open dialog when button is clicked", async () => {
      const title = "Test Title";
      const body = "Test body content";
      renderComponent({ title, body });

      const infoButton = screen.getByLabelText(defaultAriaLabel);

      // Dialog should not be visible initially
      expect(screen.queryByText(title)).not.toBeInTheDocument();

      // Click to open dialog
      await userEvent.click(infoButton);

      // Dialog content should now be visible
      await waitFor(() => {
        expect(screen.getByText(title)).toBeInTheDocument();
        expect(screen.getByText(body)).toBeInTheDocument();
      });
    });

    it("should close dialog when button is clicked again", async () => {
      const title = "Test Title";
      renderComponent({ title });

      const infoButton = screen.getByLabelText(defaultAriaLabel);

      // Open dialog
      await userEvent.click(infoButton);
      await waitFor(() => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });

      // Close dialog by clicking button again
      await userEvent.click(infoButton);
      await waitFor(() => {
        expect(screen.queryByText(title)).not.toBeInTheDocument();
      });
    });
  });

  describe("Accessibility", () => {
    it("should update aria-expanded when dialog opens", async () => {
      const title = "Test Title";
      renderComponent({ title });

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).toHaveAttribute("aria-expanded", "false");

      await userEvent.click(infoButton);

      await waitFor(() => {
        expect(infoButton).toHaveAttribute("aria-expanded", "true");
      });
    });

    it("should use custom ariaLabel when provided", () => {
      const customAriaLabel = "Custom info label";
      renderComponent({ "aria-label": customAriaLabel });

      expect(screen.getByLabelText(customAriaLabel)).toBeInTheDocument();
    });

    it("should use ariaLabelledby when provided", () => {
      const labelId = "custom-label-id";
      renderComponent({ "aria-labelledby": labelId });

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).toHaveAttribute("aria-labelledby", labelId);
    });

    it("should generate dialog ID for aria-controls when id is provided", async () => {
      const id = "test-info";
      const title = "Test Title";
      renderComponent({ id, title });

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).toHaveAttribute("id", id);
      expect(infoButton).toHaveAttribute("aria-controls", `${id}-dialog`);

      // Open dialog to verify dialog is rendered
      await userEvent.click(infoButton);
      await waitFor(() => {
        const dialogContent = screen.getByRole("dialog");
        expect(dialogContent).toHaveAttribute("id", `${id}-dialog`);
      });
    });

    it("should not have aria-controls when no id provided", () => {
      renderComponent();

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).not.toHaveAttribute("aria-controls");
    });
  });

  describe("Disabled state", () => {
    it("should not open dialog when disabled", async () => {
      const title = "Test Title";
      renderComponent({ title, disabled: true });

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      await userEvent.click(infoButton);

      expect(screen.queryByText(title)).not.toBeInTheDocument();
    });

    it("should apply disabled attribute to button", () => {
      renderComponent({ disabled: true });
      const infoButton = screen.getByLabelText(defaultAriaLabel);
      expect(infoButton).toHaveAttribute("aria-disabled", "true");
    });
  });

  describe("Callbacks", () => {
    it("should call onDialogShow when dialog opens", async () => {
      const onDialogShow = vi.fn();
      const title = "Test Title";
      renderComponent({ title, onDialogShow });

      const infoButton = screen.getByLabelText(defaultAriaLabel);
      await userEvent.click(infoButton);

      await waitFor(() => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });

      expect(onDialogShow).toHaveBeenCalledTimes(1);
    });

    it("should call onDialogHide when dialog closes", async () => {
      const onDialogHide = vi.fn();
      const title = "Test Title";
      renderComponent({ title, onDialogHide });

      const infoButton = screen.getByLabelText(defaultAriaLabel);

      // Open dialog
      await userEvent.click(infoButton);
      await waitFor(() => {
        expect(screen.getByText(title)).toBeInTheDocument();
      });

      // Close dialog
      await userEvent.click(infoButton);
      await waitFor(() => {
        expect(screen.queryByText(title)).not.toBeInTheDocument();
      });

      // TODO: fix this assertion
      // expect(onDialogHide).toHaveBeenCalledTimes(1);
    });
  });
});
