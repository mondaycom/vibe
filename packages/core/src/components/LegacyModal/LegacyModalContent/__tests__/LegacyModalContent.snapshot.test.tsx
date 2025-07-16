import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import ModalContent from "../LegacyModalContent";

describe("ModalContent renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<ModalContent>content</ModalContent>).toJSON();
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
