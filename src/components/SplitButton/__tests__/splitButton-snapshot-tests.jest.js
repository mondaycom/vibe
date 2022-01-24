import React from "react";
import renderer from "react-test-renderer";
import SplitButton from "../SplitButton";

const secondaryContentText = "Test secondary dialog content";
const secondaryContent = <div>{secondaryContentText}</div>;

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
});
