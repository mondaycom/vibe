import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Link from "../Link";

describe("Link renders correctly", () => {
  it("with icon", () => {
    const tree = renderer.create(<Link icon="fa fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with right icon", () => {
    const tree = renderer.create(<Link icon="fa fa-star" iconPosition="end" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Link id="TestId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Link className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text", () => {
    const tree = renderer.create(<Link text="Link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabeledBy", () => {
    const tree = renderer.create(<Link ariaLabeledBy="aria label link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaDescribedby", () => {
    const tree = renderer.create(<Link ariaDescribedby="aria described by" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabelDescription", () => {
    const tree = renderer.create(<Link ariaLabelDescription="arialabel link" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
