import React from "react";
import renderer from "react-test-renderer";
import SplitButtonMenu from "../SplitButtonMenu";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../tests/__tests__/test-utils";

const SplitButtonMenuWithItems = (
  <SplitButtonMenu id="menu">
    <MenuItem title="Test 1" />
    <MenuItem title="Test 2" />
  </SplitButtonMenu>
);

describe("SplitButtonMenu", () => {
  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
  });

  it("renders correctly", () => {
    const tree = renderer.create(SplitButtonMenuWithItems).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
