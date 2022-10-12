import React from "react";
import renderer from "react-test-renderer";
import DialogContentContainer from "../DialogContentContainer";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<DialogContentContainer className="testClassName" type="popover" size="medium" style={{textAlign:'center'}}><p>Children text</p></DialogContentContainer>).toJSON();
  expect(tree).toMatchSnapshot();
});
