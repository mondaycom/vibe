import React from "react";
import renderer from "react-test-renderer";
import ModalFooterButtons from "../ModalFooterButtons";

describe("ModalFooterButtons", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with no tertiary", () => {
    const tree = renderer.create(<ModalFooterButtons primaryButtonText="Confirm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with disabled primary", () => {
    const tree = renderer
      .create(
        <ModalFooterButtons primaryButtonText="Confirm" secondaryButtonText="Cancel" disablePrimaryButton={true} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
