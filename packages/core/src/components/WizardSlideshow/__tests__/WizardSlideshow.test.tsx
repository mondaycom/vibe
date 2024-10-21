import React from "react";
import { render, screen } from "@testing-library/react";
import WizardSlideshow from "../WizardSlideshow";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>
  };
});

describe("WizardSlideshow", () => {
  const mockChildren = [<div key="1">Step 1</div>, <div key="2">Step 2</div>, <div key="3">Step 3</div>];

  it("should render first step", () => {
    render(
      <WizardSlideshow activeStep={0} direction="forward">
        {mockChildren}
      </WizardSlideshow>
    );
    expect(screen.getByText("Step 1")).toBeInTheDocument();
  });

  it("should display the correct step based on activeStep prop", () => {
    const { rerender } = render(
      <WizardSlideshow activeStep={0} direction="forward">
        {mockChildren}
      </WizardSlideshow>
    );
    expect(screen.getByText("Step 1")).toBeInTheDocument();

    rerender(
      <WizardSlideshow activeStep={1} direction="forward">
        {mockChildren}
      </WizardSlideshow>
    );
    expect(screen.getByText("Step 2")).toBeInTheDocument();
  });
});
