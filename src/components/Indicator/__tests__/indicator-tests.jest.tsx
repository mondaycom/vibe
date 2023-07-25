import React from "react";
import "@testing-library/jest-dom";
import { cleanup, render } from "@testing-library/react";
import Indicator, { IndicatorProps } from "../Indicator";
import { ComponentDefaultTestId } from "../../../tests/test-ids-utils";
import { IndicatorColor } from "../IndicatorConstants";

const renderComponent = (props?: IndicatorProps) => {
  return render(<Indicator {...props} />);
};

describe("Indicator", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render indicator", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.INDICATOR)).toBeInTheDocument();
  });

  it("should have the default color", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.INDICATOR)).toHaveClass(`colorNotification`);
  });

  it("should set aria-label correctly", () => {
    const ariaLabel = "test label";
    const { getByTestId } = renderComponent({ ariaLabel });
    expect(getByTestId(ComponentDefaultTestId.INDICATOR)).toHaveAttribute("aria-label", ariaLabel);
  });

  it("should change color correctly when indicatorColor prop is passed", () => {
    const { getByTestId } = renderComponent({ indicatorColor: IndicatorColor.PRIMARY });
    expect(getByTestId(ComponentDefaultTestId.INDICATOR)).toHaveClass("colorPrimary");
  });

  it("should change data-testid correctly when data-testid prop is passed", () => {
    const testId = "testId";
    const { getByTestId } = renderComponent({ "data-testid": testId });
    expect(getByTestId(testId)).toBeInTheDocument();
  });

  it("should change id correctly when id prop is passed", () => {
    const id = "testId";
    const { getByTestId } = renderComponent({ id });
    expect(getByTestId(ComponentDefaultTestId.INDICATOR + "_" + id)).toBeInTheDocument();
  });
});
