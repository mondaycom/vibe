import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, act } from "@testing-library/react";
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
    expect(clickedColorValue).toBe(colorToClick);
  });
});
