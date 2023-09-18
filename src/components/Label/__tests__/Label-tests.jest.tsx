import { render, fireEvent, screen } from "@testing-library/react";
import Label from "../Label";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

describe("Label", () => {
  const defaultTestId = getTestId(ComponentDefaultTestId.LABEL);

  it("should not call onClick callback when label doens't have an onClick callback", () => {
    const onClick = jest.fn();
    render(<Label text="Label" />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick).not.toBeCalled();
  });

  it("should call onClick callback when label is clicked", () => {
    const onClick = jest.fn();
    render(<Label text="Clickable Label" onClick={onClick} />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick).toBeCalled();
  });
});
