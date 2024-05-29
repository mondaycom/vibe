import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Label from "../Label";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import userEvent from "@testing-library/user-event";

describe("Label", () => {
  const defaultTestId = getTestId(ComponentDefaultTestId.LABEL);

  describe("Clickable", () => {
    it("should call onClick callback when label is clicked", () => {
      const onClick = jest.fn();
      render(<Label text="Clickable Label" onClick={onClick} />);
      fireEvent.click(screen.getByTestId(defaultTestId));
      expect(onClick).toBeCalled();
    });

    it("should call onClick callback when label is clicked with the enter key", () => {
      const onClick = jest.fn();
      render(<Label text="Clickable Label" onClick={onClick} />);
      screen.getByTestId(defaultTestId).focus();
      userEvent.type(screen.getByTestId(defaultTestId), "{enter}");
      expect(onClick).toBeCalled();
    });

    it("should call onClick callback when label is clicked with the space key", () => {
      const onClick = jest.fn();
      render(<Label text="Clickable Label" onClick={onClick} />);
      screen.getByTestId(defaultTestId).focus();
      userEvent.type(screen.getByTestId(defaultTestId), "{space}");
      expect(onClick).toBeCalled();
    });
  });
});
