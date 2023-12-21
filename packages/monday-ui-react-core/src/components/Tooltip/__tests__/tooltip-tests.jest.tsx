import React from "react";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import Tooltip from "../Tooltip";
import Button from "../../Button/Button";

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

  it("Shouldn't trigger onTooltipShow on keyboard focus", async () => {
    const onTooltipShow = jest.fn();
    const testId = "tooltip-button";
    const { getByTestId } = render(
      <Tooltip content="content" onTooltipShow={onTooltipShow}>
        <Button data-testid={testId}>hello</Button>
      </Tooltip>
    );
    fireEvent.focus(getByTestId(testId));
    expect(onTooltipShow).toHaveBeenCalledTimes(0);
  });

  it("Should trigger onTooltipShow on keyboard focus when addKeyboardHideShowTriggersByDefault is true", async () => {
    const onTooltipShow = jest.fn();
    const testId = "tooltip-button";
    const { getByTestId } = render(
      <Tooltip content="content" onTooltipShow={onTooltipShow} addKeyboardHideShowTriggersByDefault>
        <Button data-testid={testId}>hello</Button>
      </Tooltip>
    );
    fireEvent.focus(getByTestId(testId));
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

  it("Shouldn't trigger onTooltipHide on keyboard blur", async () => {
    const onTooltipHide = jest.fn();
    const testId = "tooltip-button";
    const { getByTestId } = render(
      <Tooltip content="content" onTooltipHide={onTooltipHide}>
        <Button data-testid={testId}>hello</Button>
      </Tooltip>
    );
    fireEvent.mouseOver(getByTestId(testId));
    await waitFor(() => screen.getByText("content"));
    fireEvent.blur(getByTestId(testId));
    expect(onTooltipHide).toHaveBeenCalledTimes(0);
  });

  it("Should trigger onTooltipHide on keyboard blur when addKeyboardHideShowTriggersByDefault is true", async () => {
    const onTooltipHide = jest.fn();
    const testId = "tooltip-button";
    const { getByTestId } = render(
      <Tooltip content="content" onTooltipHide={onTooltipHide} addKeyboardHideShowTriggersByDefault>
        <Button data-testid={testId}>hello</Button>
      </Tooltip>
    );
    fireEvent.mouseOver(getByTestId(testId));
    await waitFor(() => screen.getByText("content"));
    fireEvent.blur(getByTestId(testId));
    await waitForElementToBeRemoved(() => screen.getByText("content"));
    expect(onTooltipHide).toHaveBeenCalledTimes(1);
  });
});
