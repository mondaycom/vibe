import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Dropdown from "../Dropdown";

const mockOptions = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

describe("Dropdown tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});
