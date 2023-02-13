import React from "react";
import renderer from "react-test-renderer";
import { ModalButtons } from "../../../index";

describe("ModalContent renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<ModalButtons />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with confirm text", () => {
    const tree = renderer.create(<ModalButtons confirmText="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with cancel text", () => {
    const tree = renderer.create(<ModalButtons confirmText="cancel" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
