import { describe, it, expect } from "vitest";
import React from "react";
import ModalFooter from "../LegacyModalFooter";
import { render } from "@testing-library/react";

describe("ModalFooter renders correctly", () => {
  it("with required props", () => {
    const { container } = render(
      <ModalFooter id="modal-title-id" title="Default title">
        <div>footer content</div>
      </ModalFooter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with className", () => {
    const { container } = render(
      <ModalFooter id="modal-title-id" title="Default title" className="className">
        <div>footer content</div>
      </ModalFooter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
