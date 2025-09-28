import { describe, it, expect, afterEach } from "vitest";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import InfoDialogContent from "../InfoDialogContent";
import { type InfoDialogContentProps } from "../InfoDialogContent.types";

const renderComponent = (props: InfoDialogContentProps) => {
  return render(<InfoDialogContent {...props} />);
};

describe("InfoDialogContent", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Rendering", () => {
    it("should render title when provided", () => {
      const title = "Test Title";
      renderComponent({ title });

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it("should render body when provided", () => {
      const body = "Test body content";
      renderComponent({ body });

      expect(screen.getByText(body)).toBeInTheDocument();
    });

    it("should render link when provided", () => {
      const link = {
        text: "Learn more",
        href: "https://example.com"
      };
      renderComponent({ link });

      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", link.href);
    });

    it("should render all content elements together when provided", () => {
      const title = "Test Title";
      const body = "Test body";
      const link = { text: "Learn more", href: "https://example.com" };
      renderComponent({ title, body, link });

      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(body)).toBeInTheDocument();
      expect(screen.getByText(link.text)).toBeInTheDocument();
    });

    it("should return null when no content element is provided", () => {
      const { container } = renderComponent({});
      expect(container.firstChild).toBeNull();
    });
  });
});
