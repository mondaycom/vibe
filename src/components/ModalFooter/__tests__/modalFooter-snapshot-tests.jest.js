import React from "react";
import ModalFooter from "../ModalFooter";
import { cleanup, render } from "@testing-library/react";
import { snapshotDiff } from "../../../utils/jest-utils";

async function renderModalFooter(props) {
  const { asFragment } = render(
    <ModalFooter id="modal-title-id" title={"Default title"} {...props}>
      <div>footer content</div>
    </ModalFooter>
  );
  return asFragment().firstChild;
}

describe("ModalFooter", () => {
  let defaultRender;
  beforeAll(async () => {
    defaultRender = await renderModalFooter();
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("with required props", () => {
    expect(defaultRender).toMatchSnapshot();
  });

  it("with className", async () => {
    const props = { className: "className" };
    const currentRender = await renderModalFooter(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });
});
