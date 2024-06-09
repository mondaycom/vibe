import React from "react";
import renderer from "react-test-renderer";
import ModalContent from "../ModalContent";

describe("ModalContent renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<ModalContent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with children", () => {
    const tree = renderer
      .create(
        <ModalContent>
          <div>children</div>
        </ModalContent>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
