import React from "react";
import renderer from "react-test-renderer";
import TextAreaField from "../TextAreaField";

describe("TextAreaField renders correctly", () => {
  it("with placeholder", () => {
    const tree = renderer.create(<TextAreaField placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<TextAreaField value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<TextAreaField disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with wrapperClassName", () => {
    const tree = renderer.create(<TextAreaField wrapperClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<TextAreaField className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<TextAreaField id="testId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with validation", () => {
    const tree = renderer.create(<TextAreaField validation={{ status: "error", text: "error" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with showCharCount", () => {
    const tree = renderer.create(<TextAreaField showCharCount />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when loading", () => {
    const tree = renderer.create(<TextAreaField loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with labelIconName", () => {
    const tree = renderer.create(<TextAreaField labelIconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when readonly", () => {
    const tree = renderer.create(<TextAreaField readonly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<TextAreaField className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

   it("when required", () => {
    const tree = renderer.create(<TextAreaField required />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with iconsNames", () => {
    const tree = renderer
        .create(<TextAreaField iconsNames={{ primary: "primary-label", secondary: "secondary-label", layout: "test" }} />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with min and max length", () => {
    const tree = renderer.create(<TextAreaField minLength={10} maxLength={100} />).toJSON();
    expect(tree).toMatchSnapshot();
  })
});
