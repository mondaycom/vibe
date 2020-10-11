import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { expect, sinon } from "../../test/test-helpers";
import Link from "./Link";

describe("<Link />", () => {
  const text = "Read More";
  const href = "https://www.monday.com";
  let onClickStub;
  beforeEach(() => {
    onClickStub = sinon.stub();
  });

  afterEach(() => {
    cleanup();
    onClickStub.reset();
  });

  describe("default props", () => {
    it("should open link in a new window", () => {
      const { getByText } = render(<Link text={text} />);
      const element = getByText(text).closest("a");
      expect(element.target).to.equal(Link.target.NEW_WINDOW);
    });
    it("should open link to have noreferrer attribute", () => {
      const { getByText } = render(<Link text={text} />);
      const element = getByText(text).closest("a");
      expect(element.rel).to.equal("noreferrer");
    });
  });

  it("should call onClick", () => {
    const { getByText } = render(<Link text={text} onClick={onClickStub} />);
    const element = getByText(text).closest("a");
    fireEvent.click(element);
    expect(onClickStub).to.be.called;
  });

  it("should have the correct href", () => {
    const { getByText } = render(<Link text={text} href={href} />);
    const element = getByText(text).closest("a");
    expect(element.href).to.equal(`${href}/`);
  });

  it("should have the correct target", () => {
    const target = Link.target.SELF;
    const { getByText } = render(
      <Link text={text} href={href} target={target} />
    );
    const element = getByText(text).closest("a");
    expect(element.target).to.equal(target);
  });

  it("should apply aria label correctly", () => {
    const ariaLabel = "Read more about the intresting article";
    const { getByLabelText } = render(
      <Link text={text} ariaLabelDescription={ariaLabel} />
    );
    const element = getByLabelText(ariaLabel);
    expect(element).to.be.ok;
  });
});
