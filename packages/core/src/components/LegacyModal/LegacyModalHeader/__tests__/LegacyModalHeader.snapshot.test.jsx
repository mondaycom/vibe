import { describe, it, expect } from "vitest";
import React from "react";
import ModalHeader from "../LegacyModalHeader";
import { Settings } from "@vibe/icons";
import { render } from "@testing-library/react";

describe("ModalHeader renders correctly", () => {
  it("with required props", () => {
    const { container } = render(<ModalHeader id="modal-title-id" title="Default title" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with description", () => {
    const { container } = render(<ModalHeader id="modal-title-id" title="Default title" description="description" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with icon", () => {
    const { container } = render(<ModalHeader id="modal-title-id" title="Default title" icon={Settings} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with classNames", () => {
    const { container } = render(
      <ModalHeader
        id="modal-title-id"
        title="Default title"
        className="className"
        descriptionClassName="descriptionClassName"
        iconClassName="iconClassName"
        titleClassName="titleClassName"
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
