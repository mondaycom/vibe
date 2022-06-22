import React from "react";
import renderer from "react-test-renderer";
import Modal from "../Modal";

const baseProps = {
  id: "modal-id",
  show: true,
  title: "Modal Title",
  onClose: () => {}
};

describe("Modal renders correctly", () => {
  it("with base props", () => {
    const tree = renderer.create(<Modal {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
