import React from "react";
import renderer from "react-test-renderer";
import ModalFooter from "../ModalFooter";
import { Button } from "components";

describe("ModalFooter renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer
      .create(
        <ModalFooter>
          <Button />
        </ModalFooter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
