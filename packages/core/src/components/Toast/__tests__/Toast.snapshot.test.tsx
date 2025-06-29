import { vi, describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Toast from "../Toast";

vi.mock("react-transition-group", () => {
  const FakeTransition = vi.fn(({ children }) => children);
  const FakeSwitchTransition = vi.fn(({ children }) => children);
  const FakeCSSTransition = vi.fn(({ children }) => children);
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
    SwitchTransition: FakeSwitchTransition
  };
});

describe("Toast renders correctly", () => {
  it("(renders nothing) with empty props", () => {
    const tree = renderer.create(<Toast />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders nothing when open is false", () => {
    const tree = renderer.create(<Toast open={false}>Something Happened</Toast>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when open is true", () => {
    const tree = renderer.create(<Toast open>Something Happened</Toast>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("and don't renders close button if closeable=false", () => {
    const tree = renderer
      .create(
        <Toast open closeable={false}>
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with button", () => {
    const tree = renderer
      .create(
        <Toast open actions={[{ type: "button", content: "Undo 5", key: 1 }]}>
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with link", () => {
    const tree = renderer
      .create(
        <Toast
          open
          actions={[{ type: Toast.actionTypes.LINK, text: "Lorem ipsum", href: "https://monday.com", key: 1 }]}
        >
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with button and link", () => {
    const tree = renderer
      .create(
        <Toast
          open
          actions={[
            { type: "button", content: "Undo 5", key: 1 },
            { type: "link", text: "Lorem ipsum", href: "https://monday.com", key: 2 }
          ]}
        >
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with negative type", () => {
    const tree = renderer
      .create(
        <Toast open type="negative">
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when icon is hidden", () => {
    const tree = renderer.create(<Toast hideIcon>Something Happened</Toast>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with loading", () => {
    const tree = renderer
      .create(
        <Toast open loading>
          Something Happened
        </Toast>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
