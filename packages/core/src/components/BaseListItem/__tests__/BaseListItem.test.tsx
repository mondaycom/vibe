import React from "react";
import { render } from "@testing-library/react";
import BaseListItem from "../BaseListItem";
import { BaseListItemProps, StartElement, EndElement } from "../BaseListItem.types";

const startElement: StartElement = {
  type: "avatar",
  value: "avatar.png",
  square: true
};

const endElement: EndElement = {
  type: "icon",
  value: "check"
};

function renderBaseListItem(props?: BaseListItemProps) {
  return render(<BaseListItem {...props} />);
}

describe("BaseListItem", () => {
  const label = "Default Item";

  it("should render correctly with all props", () => {
    const { getByText } = renderBaseListItem({
      label,
      value: "item1",
      size: "large",
      selected: true,
      disabled: false,
      highlighted: true,
      startElement,
      endElement,
      className: "custom-wrapper"
    });

    expect(getByText("Default Item").parentNode).toHaveClass("large");
    expect(getByText("Default Item").parentNode).toHaveClass("selected");
    expect(getByText("Default Item").parentNode).toHaveClass("highlighted");
    expect(getByText("Default Item").parentNode).toHaveClass("custom-wrapper");
  });

  describe("with declared props", () => {
    it("should apply the size class", () => {
      const { getByText } = renderBaseListItem({ label, size: "large" });
      expect(getByText("Default Item").parentNode).toHaveClass("large");
    });

    it("should show start and end elements when provided", () => {
      const { getByTestId } = renderBaseListItem({
        label,
        startElement,
        endElement
      });

      expect(getByTestId("avatar-content")).toBeInTheDocument();
      expect(getByTestId("icon")).toBeInTheDocument();
    });

    it("should apply the selected class", () => {
      const { getByText } = renderBaseListItem({ label, selected: true });
      expect(getByText("Default Item").parentNode).toHaveClass("selected");
    });

    it("should apply the disabled class", () => {
      const { getByText } = renderBaseListItem({ label, disabled: true });
      expect(getByText("Default Item").parentNode).toHaveClass("disabled");
    });

    it("should apply the highlighted class", () => {
      const { getByText } = renderBaseListItem({ label, highlighted: true });
      expect(getByText("Default Item").parentNode).toHaveClass("highlighted");
    });

    it("should have role option", () => {
      const { getByRole } = renderBaseListItem({ label });
      expect(getByRole("option")).toBeInTheDocument();
    });
  });
});
