import React from "react";
import ModalHeader from "../ModalHeader";
import { Settings } from "../../../components/Icon/Icons";
import { cleanup, render } from "@testing-library/react";
import { snapshotDiff } from "../../../utils/jest-utils";

async function renderModalHeader(props) {
  const { asFragment } = render(<ModalHeader id="modal-title-id" title={"Default title"} {...props} />);
  return asFragment().firstChild;
}

describe("ModalHeader", () => {
  let defaultRender;
  beforeAll(async () => {
    defaultRender = await renderModalHeader();
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("with required props", () => {
    expect(defaultRender).toMatchSnapshot();
  });

  it("with close button hidden", async () => {
    const props = { hideCloseButton: true };
    const currentRender = await renderModalHeader(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with description", async () => {
    const props = { description: "description" };
    const currentRender = await renderModalHeader(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with icon", async () => {
    const props = { icon: Settings };
    const currentRender = await renderModalHeader(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("with classNames", async () => {
    const props = {
      className: "className",
      descriptionClassName: "descriptionClassName",
      iconClassName: "iconClassName",
      titleClassName: "titleClassName"
    };
    const currentRender = await renderModalHeader(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });
});
