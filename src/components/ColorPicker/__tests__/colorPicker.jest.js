import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act, screen } from "@testing-library/react";
import _difference from "lodash/difference";
import ColorPicker from "../ColorPicker";
import { contentColors } from "../../../utils/colors-vars-map";
import { ColorPickerColorsGrid } from "../../ColorPicker/components/ColorPickerContent/ColorPickerColorsGrid";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ColorPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();

describe("ColorPicker", () => {
  it("Should call onSave with color clicked value", () => {
    const colorToClick = contentColors[0];
    let clickedColorValue;
    const onSaveMock = jest.fn();

    const { getByLabelText } = render(
      <ColorPicker
        onSave={color => {
          onSaveMock();
          clickedColorValue = color;
        }}
      />
    );

    const colorElementToClick = getByLabelText(colorToClick);

    act(() => {
      fireEvent.click(colorElementToClick);
    });

    expect(onSaveMock.mock.calls.length).toBe(1);
    expect(clickedColorValue).toStrictEqual([colorToClick]);
  });

  it("Should call onSave with multiselect colors clicked values", () => {
    const colorToClick = contentColors[0];
    let clickedColorValue;
    const onSaveMock = jest.fn();

    const { getByLabelText } = render(
      <ColorPicker
        isMultiselect
        onSave={colors => {
          onSaveMock();
          clickedColorValue = colors;
        }}
      />
    );

    const colorElementToClick = getByLabelText(colorToClick);

    act(() => {
      fireEvent.click(colorElementToClick);
    });

    expect(onSaveMock.mock.calls.length).toBe(1);
    expect(clickedColorValue).toStrictEqual([colorToClick]);
  });

  it("should render only colors not in black list", () => {
    const blackListColors = contentColors.slice(0, 3);
    const restOfColors = _difference(contentColors, blackListColors);

    const { getByLabelText, queryByLabelText } = render(<ColorPicker isBlackListMode colorsList={blackListColors} />);

    blackListColors.forEach(color => expect(queryByLabelText(color)).toBeNull());
    const restOfColorsElements = restOfColors.map(color => getByLabelText(color));

    expect(restOfColorsElements.length).toBe(restOfColors.length);
  });

  it("should render only colors in white list", () => {
    const whiteListColors = contentColors.slice(0, 3);
    const restOfColors = _difference(contentColors, whiteListColors);
    const { getByLabelText, queryByLabelText } = render(
      <ColorPicker isBlackListMode={false} colorsList={whiteListColors} />
    );

    const whiteListColorsElements = whiteListColors.map(color => getByLabelText(color));
    restOfColors.forEach(color => expect(queryByLabelText(color)).toBeNull());

    expect(whiteListColorsElements.length).toBe(whiteListColors.length);
  });

  it("should render all colors if forceUseRawColorList is true and isBlackListMode is false", () => {
    const colorList = ["#abcdef", "#123456", "#234567"];
    const { getByLabelText } = render(<ColorPicker colorsList={colorList} forceUseRawColorList={true} />);

    const colorsElements = colorList.map(color => getByLabelText(color));

    expect(colorsElements.length).toBe(colorsElements.length);
  });

  it("should render all colors if forceUseRawColorList is true, even if isBlackListMode is true", () => {
    const colorList = ["#abcdef", "#123456", "#234567"];
    const { getByLabelText } = render(
      <ColorPicker colorsList={colorList} forceUseRawColorList={true} isBlackListMode={true} />
    );

    const colorsElements = colorList.map(color => getByLabelText(color));

    expect(colorsElements.length).toBe(colorsElements.length);
  });

  it("should render tooltip with color name if showColorNameTooltip is true", () => {
    const colorPicker = render(<ColorPicker showColorNameTooltip />);
    const colorName = "done-green";
    const colorNameTooltip = "Done Green";

    const component = colorPicker.getByLabelText(colorName);
    act(() => {
      fireEvent.mouseOver(component);
    });
    jest.advanceTimersByTime(1000);
    const content = screen.getByText(colorNameTooltip);
    expect(content).toBeTruthy();
  });

  it("should not render tooltip with the color name if showColorNameTooltip is true and forceUseRawColorList is true", () => {
    const colorName = "done-green";
    const colorNameTooltip = "Done Green";
    const colorList = [colorName];
    const colorPicker = render(<ColorPicker colorsList={colorList} showColorNameTooltip forceUseRawColorList />);

    const component = colorPicker.getByLabelText(colorName);
    act(() => {
      fireEvent.mouseOver(component);
    });
    jest.advanceTimersByTime(1000);
    const content = screen.queryByText(colorNameTooltip);
    expect(content).toBeNull();
  });

  it("should render tooltip with tooltipContentByColor value if tooltipContentByColor of the color exist", () => {
    const colorName = "done-green";
    const colorNameTooltip = "Done Green";
    const contentByColorTooltip = "Custom tooltip";
    const tooltipContentByColor = { "done-green": contentByColorTooltip };
    const colorsToRender = [colorName];

    const colorPicker = render(
      <ColorPickerColorsGrid
        colorsToRender={colorsToRender}
        tooltipContentByColor={tooltipContentByColor}
        showColorNameTooltip
      />
    );

    const component = colorPicker.getByLabelText(colorName);
    act(() => {
      fireEvent.mouseOver(component);
    });
    jest.advanceTimersByTime(1000);
    const contentByName = screen.queryByText(colorNameTooltip);
    const expected = screen.getByText(contentByColorTooltip);

    expect(contentByName).toBeNull();
    expect(expected).toBeTruthy();
  });
});
