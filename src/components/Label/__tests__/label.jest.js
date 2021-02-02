import React from "react";
import { cleanup, render } from "@testing-library/react";
import renderer from "react-test-renderer";
import Label from "../Label";

const getComponentToRender = ({ ...props } = {}) => {
  return <Label {...props} />;
};

const renderComponent = ({ ...props } = {}) => {
  return render(getComponentToRender(props));
};

describe("<Label />", () => {
  afterEach(() => {
    cleanup();
  });

  it("Shows the right text", () => {
    const counterComponent = renderComponent({ text: "Test" });
    const counterText = counterComponent.getByText("Test");
    expect(counterText).toBeTruthy();
  });
});

describe("Snapshots", () => {
  describe("fill", () => {
    it("primary", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.FILL} color={Label.colors.PRIMARY} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("dark", () => {
      const tree = renderer.create(<Label text={"Test"} kind={Label.kinds.FILL} color={Label.colors.DARK} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("positive", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.FILL} color={Label.colors.POSITIVE} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("negative", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.FILL} color={Label.colors.NEGATIVE} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("line", () => {
    it("primary", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.LINE} color={Label.colors.PRIMARY} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("dark", () => {
      const tree = renderer.create(<Label text={"Test"} kind={Label.kinds.LINE} color={Label.colors.DARK} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("positive", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.LINE} color={Label.colors.POSITIVE} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("negative", () => {
      const tree = renderer
        .create(<Label text={"Test"} kind={Label.kinds.LINE} color={Label.colors.NEGATIVE} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
