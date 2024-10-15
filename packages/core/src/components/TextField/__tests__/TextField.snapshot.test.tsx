import React from "react";
import renderer from "react-test-renderer";
import TextField from "../TextField";

describe("TextField renders correctly", () => {
  it("with placeholder", () => {
    const tree = renderer.create(<TextField placeholder="placeholder" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<TextField value="value" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<TextField disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with wrapperClassName", () => {
    const tree = renderer.create(<TextField wrapperClassName="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<TextField className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<TextField id="testId" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with validation", () => {
    const tree = renderer.create(<TextField validation={{ status: "error", text: "error" }} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with showCharCount", () => {
    const tree = renderer.create(<TextField showCharCount />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when loading", () => {
    const tree = renderer.create(<TextField loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with another type", () => {
    const tree = renderer.create(<TextField type="password" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with large size", () => {
    const tree = renderer.create(<TextField size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer.create(<TextField iconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with labelIconName", () => {
    const tree = renderer.create(<TextField labelIconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when readonly", () => {
    const tree = renderer.create(<TextField readonly />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<TextField className="testClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with role", () => {
    const tree = renderer.create(<TextField role="button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when required", () => {
    const tree = renderer.create(<TextField required />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with secondaryIconName", () => {
    const tree = renderer.create(<TextField secondaryIconName="fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with iconsNames", () => {
    const tree = renderer
      .create(<TextField iconsNames={{ primary: "primary-label", secondary: "secondary-label" }} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with date type", () => {
    const tree = renderer.create(<TextField type="date" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with date-time type", () => {
    const tree = renderer.create(<TextField type="datetime-local" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tel type", () => {
    const tree = renderer.create(<TextField type="tel" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with url type", () => {
    const tree = renderer.create(<TextField type="url" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with email type", () => {
    const tree = renderer.create(<TextField type="email" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
