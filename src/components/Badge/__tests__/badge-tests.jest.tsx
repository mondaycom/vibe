import React from "react";
import "@testing-library/jest-dom";
import { render, cleanup } from "@testing-library/react";
import Badge, { BadgeProps } from "../Badge";
import { ComponentDefaultTestId } from "../../../tests/constants";
import Indicator from "../../Indicator/Indicator";
import { IndicatorColor } from "../../Indicator/IndicatorConstants";
import Counter from "../../Counter/Counter";

const DEFAULT_CHILD = "Child Text";

const renderComponent = (props: BadgeProps = {}, children: React.ReactNode = DEFAULT_CHILD) => {
  return render(<Badge {...props}>{children}</Badge>);
};

describe("Badge", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render correctly", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toBeInTheDocument();
  });

  it("should be shown", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toHaveClass("show");
  });

  it("should render when has no children", () => {
    const { getByTestId, queryByText } = renderComponent({}, null);
    const badgeElement = getByTestId(ComponentDefaultTestId.BADGE);
    expect(badgeElement).toBeInTheDocument();
    expect(queryByText(DEFAULT_CHILD)).not.toBeInTheDocument();
  });

  it("should render with different children", () => {
    const expectedChild = "Other test child";
    const { getByTestId, getByText } = renderComponent({}, expectedChild);
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toBeInTheDocument();
    expect(getByText(expectedChild)).toBeInTheDocument();
  });

  it("should render badge with the default Indicator", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.INDICATOR)).toBeInTheDocument();
  });

  it("should render badge with a custom Indicator", () => {
    const { getByTestId } = renderComponent({
      badgeComponent: Indicator,
      badgeComponentProps: { indicatorColor: IndicatorColor.PRIMARY }
    });
    const indicatorElement = getByTestId(ComponentDefaultTestId.INDICATOR);
    expect(indicatorElement).toHaveClass("colorPrimary");
  });

  it("should render badge with a Counter", () => {
    const expectedCount = 5;
    const { getByTestId, getByText } = renderComponent({
      badgeComponent: Counter,
      badgeComponentProps: { count: expectedCount }
    });
    expect(getByTestId(ComponentDefaultTestId.COUNTER)).toBeInTheDocument();
    expect(getByText(expectedCount.toString())).toBeInTheDocument();
  });

  it("should render badge at default position", () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toHaveClass("topRight");
  });

  it("should render badge at correct position", () => {
    const { getByTestId } = renderComponent({
      position: { vertical: Badge.directions.BOTTOM, horizontal: Badge.directions.LEFT }
    });
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toHaveClass("bottomLeft");
  });

  it("should render badge with gap and circular classes when gap and circular props are true", () => {
    const { getByTestId } = renderComponent({ gap: true, circular: true });
    expect(getByTestId(ComponentDefaultTestId.BADGE)).toHaveClass("gap", "circular");
  });

  it("should not render badge when show prop is false", () => {
    const { queryByTestId } = renderComponent({ show: false });
    expect(queryByTestId(ComponentDefaultTestId.BADGE)).not.toHaveClass("show");
  });
});
