import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../Search";
import { SearchProps } from "../Search.types";

function renderSearch(props?: Partial<SearchProps>) {
  return render(<Search inputAriaLabel="search-input" {...props} />);
}

describe("Search", () => {
  it("should render correctly", () => {
    const { getByRole } = renderSearch();
    expect(getByRole("searchbox")).toBeInTheDocument();
  });

  it("should display the search icon by default", () => {
    const { getByTestId } = renderSearch();
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should not display the clear icon when the input is empty", () => {
    const { queryByLabelText } = renderSearch();
    expect(queryByLabelText("Clear")).toBeNull();
  });

  it("should display both the search icon and clear icon when input has value", async () => {
    const { getByTestId, getAllByTestId } = renderSearch({ value: "Test" });
    expect(getAllByTestId("icon")).toHaveLength(2);
    expect(getByTestId("clean-search-button")).toBeInTheDocument();
  });

  it("should clear the input value when the clear icon is clicked", async () => {
    const { getByRole, getByLabelText } = renderSearch({ value: "Test" });
    userEvent.click(getByLabelText("Clear"));
    expect(getByRole("searchbox")).toHaveValue("");
  });

  it("should display the clear icon once user inputs", async () => {
    const { getByRole, getByTestId } = renderSearch();
    userEvent.type(getByRole("searchbox"), "Test");
    expect(getByTestId("clean-search-button")).toBeInTheDocument();
  });

  it("should display a loader when the loading prop is true", () => {
    const { getByTestId } = renderSearch({ loading: true });
    expect(getByTestId("loader")).toBeInTheDocument();
  });

  it("should trigger onChange with the correct value when typing without debounce", () => {
    const onChange = jest.fn();
    const { getByRole } = renderSearch({ onChange, debounceRate: 0 });
    userEvent.type(getByRole("searchbox"), "Hello, World!");
    expect(onChange).toHaveBeenCalledTimes("Hello, World!".length);
    expect(onChange).toHaveBeenLastCalledWith("Hello, World!");
  });

  it("should trigger onClear when the user press the clear button", () => {
    const onClear = jest.fn();
    const { getByRole, getByLabelText } = renderSearch({ value: "Test" });
    userEvent.type(getByRole("searchbox"), "Hello, World!");
    userEvent.click(getByLabelText("Clear"));
    expect(onClear).toHaveBeenCalled;
  });

  it("should debounce the onChange call", async () => {
    jest.useFakeTimers();
    const onChange = jest.fn();

    const { getByRole } = renderSearch({ onChange, debounceRate: 100 });
    userEvent.type(getByRole("searchbox"), "Hello");
    expect(onChange).not.toHaveBeenCalled();
    jest.advanceTimersByTime(100);
    expect(onChange).toHaveBeenCalledWith("Hello");
    jest.useRealTimers();
  });

  it("should respect the autoFocus prop", () => {
    const { getByRole } = renderSearch({ autoFocus: true });
    expect(getByRole("searchbox")).toHaveFocus();
  });

  it("should not allow input when disabled is true", () => {
    const { getByRole } = renderSearch({ value: "Test", disabled: true });
    const input = getByRole("searchbox");
    expect(input).toBeDisabled();
    userEvent.type(input, "Hello, World!");
    expect(input).toHaveValue("Test");
  });

  it("should not show clear when disabled is true", () => {
    const { queryByLabelText } = renderSearch({ value: "Test", disabled: true });
    expect(queryByLabelText("Clear")).not.toBeInTheDocument();
  });

  it("should display additional action render if provided", () => {
    const AdditionalActionButton = <button type="button">Extra Action</button>;
    const { getByText } = renderSearch({ renderAction: AdditionalActionButton });
    expect(getByText("Extra Action")).toBeInTheDocument();
  });

  it("should display additional action render with hideRenderActionOnInput option true and no input value", () => {
    const AdditionalActionButton = <button type="button">Extra Action</button>;
    const { getByText } = renderSearch({ renderAction: AdditionalActionButton, hideRenderActionOnInput: true });
    expect(getByText("Extra Action")).toBeInTheDocument();
  });

  it("should not display additional action render with hideRenderActionOnInput option true and input value", () => {
    const AdditionalActionButton = <button type="button">Extra Action</button>;
    const { queryByText } = renderSearch({
      renderAction: AdditionalActionButton,
      hideRenderActionOnInput: true,
      value: "Test"
    });
    expect(queryByText("Extra Action")).not.toBeInTheDocument();
  });

  describe("a11y", () => {
    it("should have default input role when searchResultsContainerId is not provided", () => {
      const { getByRole } = renderSearch();
      expect(getByRole("searchbox")).toBeInTheDocument();
    });

    it("should have role 'combobox' when searchResultsContainerId is provided", () => {
      const { getByRole } = renderSearch({ searchResultsContainerId: "results" });
      expect(getByRole("combobox")).toBeInTheDocument();
    });

    it("should set aria-controls when searchResultsContainerId is provided and ariaExpanded is true", () => {
      const { getByRole } = renderSearch({ searchResultsContainerId: "search-results", ariaExpanded: true });
      expect(getByRole("combobox")).toHaveAttribute("aria-controls", "search-results");
    });

    it("should set aria-activedescendant when activeDescendant is provided", () => {
      const { getByRole } = renderSearch({ currentAriaResultId: "option-1" });
      expect(getByRole("searchbox")).toHaveAttribute("aria-activedescendant", "option-1");
    });

    it("should set aria-busy when loading is true", () => {
      const { getByRole } = renderSearch({ loading: true });
      expect(getByRole("searchbox")).toHaveAttribute("aria-busy", "true");
    });
  });

  describe("interactions", () => {
    it("should handle focus and blur events", () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      const { getByRole } = renderSearch({ onFocus, onBlur });
      const input = getByRole("searchbox");
      userEvent.click(input);
      expect(onFocus).toHaveBeenCalled();
      userEvent.tab();
      expect(onBlur).toHaveBeenCalled();
    });
  });
});
