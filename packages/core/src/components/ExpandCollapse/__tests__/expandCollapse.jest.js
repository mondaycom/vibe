import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen } from "@testing-library/react";
import ExpandCollapse from "../ExpandCollapse";
import "@testing-library/jest-dom";

describe("ExpandCollapse", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<ExpandCollapse />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should render header component", () => {
    render(<ExpandCollapse headerComponentRenderer={() => <h1>Some Header</h1>} />);

    expect(screen.getByText("Some Header")).toBeInTheDocument();
  });

  it("Should not render child components when closed", () => {
    render(
      <ExpandCollapse headerComponentRenderer={() => <h1>Some Header</h1>}>
        <h1>Child 1</h1>
        <span>Child 2</span>
      </ExpandCollapse>
    );

    expect(screen.getByText("Some Header")).toBeInTheDocument();

    expect(screen.queryByText("Child 1")).toBeNull();
    expect(screen.queryByText("Child 2")).toBeNull();
  });

  it("Should render header and child components when defaultOpenState = true", () => {
    render(
      <ExpandCollapse defaultOpenState={true} headerComponentRenderer={() => <h1>Some Header</h1>}>
        <h1>Child 1</h1>
        <span>Child 2</span>
      </ExpandCollapse>
    );

    expect(screen.getByText("Some Header")).toBeInTheDocument();

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("Should render child components after clicking component", () => {
    const { container } = render(
      <ExpandCollapse headerComponentRenderer={() => <h1>Some Header</h1>}>
        <h1>Child 1</h1>
        <span>Child 2</span>
      </ExpandCollapse>
    );

    expect(screen.getByText("Some Header")).toBeInTheDocument();

    expect(screen.queryByText("Child 1")).toBeNull();
    expect(screen.queryByText("Child 2")).toBeNull();

    fireEvent.click(container.firstChild.firstChild.firstChild);

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });
});
