import React from "react";
import renderer from "react-test-renderer";
import ModalFooterButtons from "../ModalFooterButtons";

describe("ModalFooterButtons", () => {
  it("with empty props", () => {
    const tree = renderer.create(<ModalFooterButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with primary button text", () => {
    const tree = renderer.create(<ModalFooterButtons primaryButtonText="Primary Confirm" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with secondary button text", () => {
    const tree = renderer.create(<ModalFooterButtons secondaryButtonText="Secondary Cancel" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
