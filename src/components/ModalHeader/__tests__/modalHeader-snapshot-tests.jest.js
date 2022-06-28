import React from "react";
import renderer from "react-test-renderer";
import ModalHeader from "../ModalHeader";
import { Settings } from "components/Icon/Icons";

describe("ModalHeader renders correctly", () => {
  it("with required props", () => {
    const tree = renderer.create(<ModalHeader id="modal-title-id" title={"Title"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with close button hidden", () => {
    const tree = renderer.create(<ModalHeader id="modal-title-id" title={"Title"} hideCloseButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with description", () => {
    const tree = renderer
      .create(<ModalHeader id="modal-title-id" title={"Title"} description="description" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer.create(<ModalHeader id="modal-title-id" title={"Title"} icon={Settings} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with classNames", () => {
    const tree = renderer
      .create(
        <ModalHeader
          id="modal-title-id"
          title={"Title"}
          className="className"
          descriptionClassName="descriptionClassName"
          iconClassName="iconClassName"
          titleClassName="titleClassName"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
