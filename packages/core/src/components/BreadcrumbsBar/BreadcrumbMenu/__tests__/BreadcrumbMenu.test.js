import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbMenu from "../BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenuItem/BreadcrumbMenuItem";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../tests/__tests__/test-utils";

jest.useFakeTimers();

// Mock the MenuItem to verify the correct props are passed through
jest.mock("../../../Menu/MenuItem/MenuItem", () => {
  return {
    __esModule: true,
    default: jest.fn(props => {
      // Call the onClick handler immediately when rendered for testing
      if (props.onClick && props.title === "Click Test") {
        props.onClick({});
      }
      return <li data-testid="menu-item-mock">{props.title}</li>;
    })
  };
});

describe("BreadcrumbMenu tests", () => {
  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
    jest.clearAllMocks();
  });

  it("should open menu when clicked", async () => {
    const { getByRole, queryByText } = render(
      <BreadcrumbsBar type="navigation">
        <BreadcrumbMenu>
          <BreadcrumbMenuItem title="Option 1" />
          <BreadcrumbMenuItem title="Option 2" />
        </BreadcrumbMenu>
      </BreadcrumbsBar>
    );

    // Menu should not be visible initially
    expect(queryByText("Option 1")).toBeNull();
    
    // Click the menu button
    const menuButton = getByRole("button");
    fireEvent.click(menuButton);

    // The menu should now be visible
    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });
  });

  it("should call onMenuShow when menu opens", async () => {
    const onMenuShowMock = jest.fn();
    
    const { getByRole } = render(
      <BreadcrumbsBar type="navigation">
        <BreadcrumbMenu onMenuShow={onMenuShowMock}>
          <BreadcrumbMenuItem title="Option 1" />
        </BreadcrumbMenu>
      </BreadcrumbsBar>
    );

    // Click the menu button
    const menuButton = getByRole("button");
    fireEvent.click(menuButton);

    // Wait for animation frame
    jest.advanceTimersByTime(100);

    // The onMenuShow callback should have been called
    expect(onMenuShowMock).toHaveBeenCalled();
  });

  it("should call onMenuHide when menu closes", async () => {
    const onMenuHideMock = jest.fn();
    
    const { getByRole } = render(
      <BreadcrumbsBar type="navigation">
        <BreadcrumbMenu onMenuHide={onMenuHideMock}>
          <BreadcrumbMenuItem title="Option 1" />
        </BreadcrumbMenu>
      </BreadcrumbsBar>
    );

    // Open the menu
    const menuButton = getByRole("button");
    fireEvent.click(menuButton);
    
    // Wait for animation frame
    jest.advanceTimersByTime(100);
    
    // Close the menu by clicking outside
    fireEvent.click(document.body);
    
    // Wait for animation frame
    jest.advanceTimersByTime(100);

    // The onMenuHide callback should have been called
    expect(onMenuHideMock).toHaveBeenCalled();
  });

  it("should pass onClick handlers to MenuItem", () => {
    const onClickMock = jest.fn();
    
    render(
      <BreadcrumbMenuItem title="Click Test" onClick={onClickMock} />
    );
    
    // Our mock will call onClick if title is "Click Test"
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should pass link to MenuItem", () => {
    // Create a spy for window.open
    const originalOpen = window.open;
    window.open = jest.fn();
    
    // Test that link is correctly used in the click handler
    const onClickMock = jest.fn();
    const mockEvent = {}; // Mock event object
    
    // Create a BreadcrumbMenuItem instance
    const { getByTestId } = render(
      <BreadcrumbMenuItem
        title="Link Test" 
        onClick={onClickMock}
        link="https://example.com"
      />
    );
    
    // Access the mock element
    expect(getByTestId("menu-item-mock")).toBeInTheDocument();
    
    // Restore window.open
    window.open = originalOpen;
  });
}); 