import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act } from "@testing-library/react";
import _difference from "lodash/difference";
import ColorPicker from "../ColorPicker";
import { contentColors } from "../../../general-stories/colors/colors-vars-map";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ColorPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});

jest.useFakeTimers();

describe("Click", () => {
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
});
