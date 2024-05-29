import React from "react";
import renderer from "react-test-renderer";
import SplitButton from "../SplitButton";
import Delete from "../../Icon/Icons/components/Delete";
import SplitButtonMenu from "../SplitButtonMenu/SplitButtonMenu";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import Menu from "../../Menu/Menu/Menu";

const secondaryContentText = "Test secondary dialog content";
const secondaryContent = <div>{secondaryContentText}</div>;
const SplitButtonMenuWithItems = (
  <SplitButtonMenu id="menu">
    <MenuItem title="Test 1" />
    <MenuItem title="Test 2" />
  </SplitButtonMenu>
);
const CustomMenuWithItems = (
  <Menu id="menu">
    <MenuItem title="Test 1" />
    <MenuItem title="Test 2" />
  </Menu>
);

describe("SplitButton renders correctly", () => {
  it("with only required props", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={secondaryContent} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with disabled", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={secondaryContent} disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tertiary button", () => {
    const tree = renderer
      .create(<SplitButton secondaryDialogContent={secondaryContent} kind={SplitButton.kinds.TERTIARY} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with medium dialog padding size", () => {
    const tree = renderer
      .create(
        <SplitButton
          secondaryDialogContent={secondaryContent}
          dialogPaddingSize={SplitButton.dialogPaddingSizes.MEDIUM}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with secondary position", () => {
    const tree = renderer
      .create(
        <SplitButton
          secondaryDialogContent={secondaryContent}
          secondaryDialogPosition={SplitButton.secondaryPositions.BOTTOM_END}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with zIndex", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={secondaryContent} zIndex={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with left icon", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={secondaryContent} leftIcon={Delete} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with right icon", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={secondaryContent} rightIcon={Delete} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with SplitButtonMenu", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={SplitButtonMenuWithItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with custom menu", () => {
    const tree = renderer.create(<SplitButton secondaryDialogContent={CustomMenuWithItems} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
