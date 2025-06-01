import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbMenu from "../BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenuItem/BreadcrumbMenuItem";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../tests/__tests__/test-utils";

vi.useFakeTimers();

vi.mock("../../../Menu/MenuItem/MenuItem", () => {
  return {
    __esModule: true,
    default: vi.fn(props => {
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
    vi.clearAllMocks();
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

    expect(queryByText("Option 1")).toBeNull();

    const menuButton = getByRole("button");
    fireEvent.click(menuButton);

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });
  });

  it("should pass onClick handlers to MenuItem", () => {
    const onClickMock = vi.fn();

    render(<BreadcrumbMenuItem title="Click Test" onClick={onClickMock} />);

    expect(onClickMock).toHaveBeenCalled();
  });

  it("should pass link to MenuItem", () => {
    const originalOpen = window.open;
    window.open = vi.fn();

    const onClickMock = vi.fn();

    const { getByTestId } = render(
      <BreadcrumbMenuItem title="Link Test" onClick={onClickMock} link="https://example.com" />
    );

    expect(getByTestId("menu-item-mock")).toBeInTheDocument();

    window.open = originalOpen;
  });
});
