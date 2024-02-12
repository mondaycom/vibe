import React from "react";
import Modal from "../Modal";
import { ModalContent, ModalFooter, ModalHeader } from "../../../components";
import { cleanup, render } from "@testing-library/react";
import { snapshotDiff } from "../../../utils/jest-utils";

const baseProps = {
  id: "modal-id",
  show: true,
  title: "Modal Heading",
  onClose: () => {}
};

const content = <p>content</p>;
const footerContent = <p>footer</p>;

const withContent = props => {
  return { content, ...props };
};

async function renderModal(props = {}) {
  const { content, ...rest } = props;
  const { asFragment } = render(
    <Modal {...baseProps} {...rest}>
      {content}
    </Modal>
  );
  return asFragment().firstChild;
}

describe("Modal", () => {
  let defaultRender;
  beforeAll(async () => {
    defaultRender = await renderModal({ content });
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("with base props", () => {
    expect(defaultRender).toMatchSnapshot();
  });

  it("with Header", async () => {
    const props = {
      content: (
        <>
          <ModalHeader title={"ModalHeader Heading"} />
          {content}
        </>
      )
    };

    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with Footer", async () => {
    const props = {
      content: (
        <>
          {content}
          <ModalFooter>{footerContent}</ModalFooter>
        </>
      )
    };
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with description", async () => {
    const props = withContent({ description: "description" });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with alertDialog", async () => {
    const props = withContent({ isAlertDialog: true });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with closeButtonAriaLabel", async () => {
    const props = withContent({ closeButtonAriaLabel: "closeButtonAriaLabel" });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with full width", async () => {
    const props = withContent({ width: Modal.width.FULL_WIDTH });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with custom width", async () => {
    const props = withContent({ width: "720px" });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with class names", async () => {
    const props = withContent({ classNames: { container: "container", overlay: "overlay", modal: "modal" } });
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with all parts", async () => {
    const props = {
      content: (
        <>
          <ModalHeader title={"ModalHeader Heading"} />
          <ModalContent>{content}</ModalContent>
          <ModalFooter>{footerContent}</ModalFooter>
        </>
      )
    };
    const currentRender = await renderModal(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });
});
