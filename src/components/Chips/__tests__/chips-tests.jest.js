import React from "react";
import Chips from "../Chips";
import { render, fireEvent, screen } from "@testing-library/react";
import { sinon, expect as sinonExpect } from "../../../test/test-helpers";

describe("Chips tests", () => {
  const lable = "Chip";
  const className = "test-class";
  let onDeletedStub;
  let chipComponent;

  beforeEach(() => {
    onDeletedStub = sinon.stub();
    chipComponent = render(
      <Chips className={className} onDelete={onDeletedStub} label={lable}  />
    );
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByRole('button'));
    sinonExpect(onDeletedStub).to.be.calledOnce;
  })

  it("should not have close icon when read only", () => {
    const { container, rerender } = chipComponent;
    rerender (<Chips readOnly />);
    expect(container.firstChild.classList.contains('with-close')).toBeFalsy();
  })

  it("should not have close icon when disabled", () => {
    const { container, rerender } = chipComponent;
    rerender (<Chips disabled />);
    expect(container.firstChild.classList.contains('with-close')).toBeFalsy();
  })
});
