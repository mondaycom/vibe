import { describe, it, expect, vi } from "vitest";
import React from "react";
import Modal from "../LegacyModal";
import { ModalContent, ModalFooter, ModalHeader } from "../../../components";
import { render } from "@testing-library/react";

const baseProps = {
  id: "modal-id",
  show: true,
  title: "Modal Heading",
  onClose: () => {}
};

const content = <p>content</p>;
const footerContent = <p>footer</p>;

describe("Modal renders correctly", () => {
  it("with base props", () => {
    const { baseElement } = render(<Modal {...baseProps}>{content}</Modal>);
    expect(baseElement).toMatchSnapshot();
  });

  it("with Header", () => {
    const { baseElement } = render(
      <Modal {...baseProps}>
        <ModalHeader title="ModalHeader Heading" />
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with Footer", () => {
    const { baseElement } = render(
      <Modal {...baseProps}>
        {content}
        <ModalFooter>{footerContent}</ModalFooter>
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with description", () => {
    const { baseElement } = render(
      <Modal {...baseProps} description="description">
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with alertDialog", () => {
    const { baseElement } = render(
      <Modal {...baseProps} isAlertDialog={true}>
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with closeButtonAriaLabel", () => {
    const { baseElement } = render(
      <Modal {...baseProps} closeButtonAriaLabel="closeButtonAriaLabel">
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with full width", () => {
    const { baseElement } = render(
      <Modal {...baseProps} width="full-width">
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with custom width", () => {
    const { baseElement } = render(
      <Modal {...baseProps} width="720px">
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with class names", () => {
    const { baseElement } = render(
      <Modal {...baseProps} classNames={{ container: "container", overlay: "overlay", modal: "modal" }}>
        {content}
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with all parts", () => {
    const { baseElement } = render(
      <Modal {...baseProps}>
        <ModalHeader title="ModalHeader Heading" />
        <ModalContent>{content}</ModalContent>
        <ModalFooter>{footerContent}</ModalFooter>
      </Modal>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
