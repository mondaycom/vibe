import React from "react";
import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import EmptyState, { EmptyStateProps } from "../EmptyState";

const defaultProps = {
  imgSrc: "someImg",
  title: "This is title",
  body: "This is body"
};

const renderComponent = (props: Partial<EmptyStateProps> = {}) => {
  return render(<EmptyState {...defaultProps} {...props} />);
};

describe("EmptyState", () => {
  describe("props sanity", () => {
    it("should render different title", () => {
      const { getByText } = renderComponent({ title: "different title" });
      expect(getByText("different title")).toBeInTheDocument();
    });

    it("should render different body", () => {
      const { getByText } = renderComponent({ body: "different body" });
      expect(getByText("different body")).toBeInTheDocument();
    });

    it("should render different image", () => {
      const { getByAltText, getByRole } = renderComponent({ imgSrc: "different image" });
      expect(getByRole("img")).toHaveAttribute("src", "different image");
      expect(getByAltText("This is title")).toBeInTheDocument();
    });
  });

  describe("actions", () => {
    describe("rendering", () => {
      it("should not render action buttons", () => {
        const { queryByRole } = renderComponent();
        expect(queryByRole("button")).toBeFalsy();
      });

      it("should render primary button", () => {
        const { getByText, getAllByRole } = renderComponent({
          primaryActionLabel: "primary",
          onPrimaryActionClick: jest.fn()
        });
        expect(getAllByRole("button")).toHaveLength(1);
        expect(getByText("primary")).toBeInTheDocument();
      });

      it("should render primary and secondary buttons", () => {
        const { getByText, getAllByRole } = renderComponent({
          primaryActionLabel: "primary",
          onPrimaryActionClick: jest.fn(),
          secondaryActionLabel: "secondary",
          onSecondaryActionClick: jest.fn()
        });
        expect(getAllByRole("button")).toHaveLength(2);
        expect(getByText("primary")).toBeInTheDocument();
        expect(getByText("secondary")).toBeInTheDocument();
      });
    });

    describe("functionality", () => {
      const primaryActionMock = jest.fn();
      const secondaryActionMock = jest.fn();
      const renderComponentWithActions = () =>
        renderComponent({
          primaryActionLabel: "primary",
          onPrimaryActionClick: primaryActionMock,
          secondaryActionLabel: "secondary",
          onSecondaryActionClick: secondaryActionMock
        });

      afterEach(() => {
        primaryActionMock.mockClear();
        secondaryActionMock.mockClear();
      });

      it("should call onPrimaryActionClick once", () => {
        const { getByText } = renderComponentWithActions();
        fireEvent.click(getByText("primary"));
        expect(primaryActionMock).toHaveBeenCalledTimes(1);
        expect(secondaryActionMock).toHaveBeenCalledTimes(0);
      });

      it("should call onSecondaryActionClick once", () => {
        const { getByText } = renderComponentWithActions();
        fireEvent.click(getByText("secondary"));
        expect(secondaryActionMock).toHaveBeenCalledTimes(1);
        expect(primaryActionMock).toHaveBeenCalledTimes(0);
      });
    });
  });
});
