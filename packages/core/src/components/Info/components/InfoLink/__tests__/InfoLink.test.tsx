import { vi, describe, it, expect, afterEach } from "vitest";
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InfoLink from "../InfoLink";
import { type InfoLinkProps } from "../InfoLink";

const renderComponent = (props: InfoLinkProps) => {
  return render(<InfoLink {...props} />);
};

describe("InfoLink", () => {
  afterEach(() => {
    cleanup();
  });

  describe("Rendering", () => {
    it("should render link with text and href", () => {
      const text = "Learn more";
      const href = "https://example.com";
      renderComponent({ text, href });

      const linkElement = screen.getByText(text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.closest("a")).toHaveAttribute("href", href);
    });

    it("should call onClick when clicked", async () => {
      const onClick = vi.fn();
      const text = "Learn more";
      const href = "https://example.com";
      renderComponent({ text, href, onClick });

      const linkElement = screen.getByText(text);
      await userEvent.click(linkElement);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
