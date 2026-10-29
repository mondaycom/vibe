import { describe, it, expect, vi } from "vitest";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

let baseItemRenderCount = 0;

vi.mock("@vibe/base-list", async () => {
  const actual = await vi.importActual<typeof import("@vibe/base-list")>("@vibe/base-list");
  const CountingBaseItem = React.forwardRef((props: any, ref: any) => {
    baseItemRenderCount++;
    return React.createElement(actual.BaseItem as any, { ...props, ref });
  });
  return { ...actual, BaseItem: CountingBaseItem };
});

const options = [
  {
    label: "Group 1",
    options: [
      { label: "Option 1", value: "opt1", index: 0 },
      { label: "Option 2", value: "opt2", index: 1 },
      { label: "Option 3", value: "opt3", index: 2 },
      { label: "Option 4", value: "opt4", index: 3 },
      { label: "Option 5", value: "opt5", index: 4 },
      { label: "Option 6", value: "opt6", index: 5 }
    ]
  }
] as const;

// Mirrors a table row: an ancestor re-renders on unrelated state (row hover) while the
// Dropdown lives in one of many rows, plus a second sibling Dropdown to mimic the "2 per row" shape
// from the original PR's profiling scenario.
function BenchRow({ hoverTick }: { hoverTick: number }) {
  return (
    <div data-hover-tick={hoverTick}>
      <Dropdown options={options as any} placeholder="Select an option" data-testid="dropdown-a" />
      <Dropdown options={options as any} placeholder="Sibling dropdown" data-testid="dropdown-b" />
    </div>
  );
}

function BenchApp() {
  const [hoverTick, setHoverTick] = React.useState(0);
  return (
    <div>
      <button onClick={() => setHoverTick(t => t + 1)}>simulate-row-hover</button>
      <BenchRow hoverTick={hoverTick} />
    </div>
  );
}

describe("Dropdown perf benchmark", () => {
  it("counts BaseItem (option) re-renders across an open + navigate + hover-noise cycle", () => {
    const { getByText, getAllByText } = render(<BenchApp />);

    // Mount renders (initial list isn't painted until open, but reset anyway for clarity).
    baseItemRenderCount = 0;

    const toggle = getAllByText("Select an option")[0];
    fireEvent.click(toggle);

    // Keyboard navigation triggers highlightedIndex changes inside the open dropdown.
    fireEvent.keyDown(toggle, { key: "ArrowDown" });
    fireEvent.keyDown(toggle, { key: "ArrowDown" });
    fireEvent.keyDown(toggle, { key: "ArrowDown" });

    // Unrelated ancestor re-render (e.g. hovering a table row) while the dropdown is open.
    fireEvent.click(getByText("simulate-row-hover"));
    fireEvent.click(getByText("simulate-row-hover"));

    fireEvent.click(getByText("Option 3"));

    console.log(`[dropdown-bench] BaseItem renders across open+navigate+hover-noise+select: ${baseItemRenderCount}`);

    // Regression guard: before the stable-contextValue fix this was 38 (an unrelated ancestor
    // re-render while the dropdown was open cascaded into re-rendering every option). Keep some
    // headroom above the current 26 so the test isn't brittle to unrelated internal render changes.
    expect(baseItemRenderCount).toBeLessThan(32);
  });
});
