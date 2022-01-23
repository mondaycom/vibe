import React from "react";
import { render, screen, waitFor, waitForElementToBeRemoved, fireEvent } from "@testing-library/react";
import Tooltip from "../Tooltip";

describe("Tooltip tests", () => {
  it("Should trigger onTooltipShow", async () => {
    const onTooltipShow = jest.fn();
    const { getByText } = render(
      <Tooltip content="content" onTooltipShow={onTooltipShow}>
        <div>hello</div>
      </Tooltip>
    );
    fireEvent.mouseOver(getByText("hello"));
    await waitFor(() => screen.getByText("content"));
    expect(onTooltipShow).toHaveBeenCalledTimes(1);
  });

  it("Should trigger onTooltipHide", async () => {
    const onTooltipHide = jest.fn();
    const { getByText } = render(
      <Tooltip content="content" onTooltipHide={onTooltipHide}>
        <div>hello</div>
      </Tooltip>
    );
    fireEvent.mouseOver(getByText("hello"));
    await waitFor(() => screen.getByText("content"));
    fireEvent.mouseLeave(getByText("hello"));
    await waitForElementToBeRemoved(() => screen.getByText("content"));
    expect(onTooltipHide).toHaveBeenCalledTimes(1);
  });
});
