import React from "react";
import renderer from "react-test-renderer";
import Modal from "../Modal";
import { ModalContent, ModalFooter, ModalHeader } from "components";

const baseProps = {
  id: "modal-id",
  show: true,
  title: "Modal Title",
  onClose: () => {}
};

const content = <p>content</p>;
const footerContent = <p>footer</p>;

describe("Modal renders correctly", () => {
  it("with base props", () => {
    const tree = renderer.create(<Modal {...baseProps}>{content}</Modal>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with Header", () => {
    const tree = renderer
      .create(
        <Modal {...baseProps}>
          <ModalHeader title={"ModalHeader Title"} />
          {content}
        </Modal>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with Footer", () => {
    const tree = renderer
      .create(
        <Modal {...baseProps}>
          {content}
          <ModalFooter>{footerContent}</ModalFooter>
        </Modal>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with all parts", () => {
    const tree = renderer
      .create(
        <Modal {...baseProps}>
          <ModalHeader title={"ModalHeader Title"} />
          <ModalContent>{content}</ModalContent>
          <ModalFooter>{footerContent}</ModalFooter>
        </Modal>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
