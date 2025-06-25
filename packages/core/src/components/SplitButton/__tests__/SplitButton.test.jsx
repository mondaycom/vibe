import { vi, describe, it, expect, beforeEach, afterEach } from "vitest";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SplitButton from "../SplitButton";
import userEvent from "@testing-library/user-event";
import { ComponentDefaultTestId } from "../../../tests/constants";
import SplitButtonMenu from "../SplitButtonMenu/SplitButtonMenu";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import { getTestId } from "../../../tests/test-ids-utils";

const text = "Click Me!";
const className = "test-class";
const secondaryContentText = "Test secondary dialog content";
const secondaryContent = <div>{secondaryContentText}</div>;
const splitMenuId = "split-menu";
const menuSecondaryContent = () => {
  return (
    <SplitButtonMenu id={splitMenuId}>
      <MenuItem title="Test 1" />
      <MenuItem title="Test 2" />
    </SplitButtonMenu>
  );
};

const ENTER_KEY = "{Enter}";

const getSecondaryButton = splitButtonComponent => {
  return splitButtonComponent.getByTestId(ComponentDefaultTestId.SPLIT_BUTTON_SECONDARY_BUTTON);
};

const getPrimaryButton = splitButtonComponent => {
  return splitButtonComponent.getByTestId(ComponentDefaultTestId.SPLIT_BUTTON_PRIMARY_BUTTON);
};

const renderComponent = ({ ...props } = {}) => {
  return render(
    <SplitButton {...props} className={className} secondaryDialogContent={secondaryContent}>
      {text}
    </SplitButton>
  );
};

vi.useFakeTimers();

describe("SplitButton tests", () => {
  it("opens the secondary content dialog on click", async () => {
    const splitButtonComponent = renderComponent();
    const arrowButton = getSecondaryButton(splitButtonComponent);
    fireEvent.click(arrowButton);
    vi.runAllTimers();
    const expectedSecondaryDialog = await screen.findByText(secondaryContentText, {}, { timeout: 10000 });
    expect(expectedSecondaryDialog).toBeTruthy();
  });

  it("doesn't open the secondary content dialog on click", () => {
    const splitButtonComponent = renderComponent({ disabled: true });
    const arrowButton = getSecondaryButton(splitButtonComponent);
    fireEvent.click(arrowButton);
    const expectedSecondaryDialog = screen.queryByText(secondaryContentText);
    expect(expectedSecondaryDialog).toBeFalsy();
  });

  it("should move between buttons with tab", () => {
    const splitButtonComponent = renderComponent();
    userEvent.tab();
    expect(getPrimaryButton(splitButtonComponent)).toHaveFocus();
    userEvent.tab();
    expect(getSecondaryButton(splitButtonComponent)).toHaveFocus();
  });

  describe("callbacks", () => {
    it("calls onSecondaryDialogDidShow when click on secondaryButton", () => {
      const onSecondaryDialogDidShow = vi.fn();
      const splitButtonComponent = renderComponent({
        onSecondaryDialogDidShow
      });
      const arrowButton = getSecondaryButton(splitButtonComponent);
      act(() => {
        fireEvent.click(arrowButton);
        vi.advanceTimersByTime(1000);
      });
      expect(onSecondaryDialogDidShow.mock.calls.length).toBe(1);
    });

    it("calls onSecondaryDialogDidHide when click on secondaryButton", async () => {
      const onSecondaryDialogDidHideMock = vi.fn();
      const splitButtonComponent = renderComponent({
        onSecondaryDialogDidHide: onSecondaryDialogDidHideMock
      });
      const arrowButton = getSecondaryButton(splitButtonComponent);

      act(() => {
        fireEvent.click(arrowButton);
        vi.advanceTimersByTime(1000);
      });

      act(() => {
        fireEvent.click(arrowButton);
        vi.runAllTimers();
      });

      expect(onSecondaryDialogDidHideMock.mock.calls.length).toBe(1);
    });

    it("does call onClick when click on primaryButton", () => {
      const primaryButtonOnClick = vi.fn();
      const splitButtonComponent = renderComponent({ onClick: primaryButtonOnClick });
      const primaryButton = getPrimaryButton(splitButtonComponent);
      act(() => {
        fireEvent.click(primaryButton);
      });
      expect(primaryButtonOnClick.mock.calls.length).toBe(1);
    });

    it("doesn't call onClick when click on secondaryButton", () => {
      const primaryButtonOnClick = vi.fn();
      const splitButtonComponent = renderComponent({ onClick: primaryButtonOnClick });
      const arrowButton = getSecondaryButton(splitButtonComponent);
      act(() => {
        fireEvent.click(arrowButton);
      });
      expect(primaryButtonOnClick.mock.calls.length).toBe(0);
    });
  });

  describe("keyboard accessibility", () => {
    it("does call onClick when enter pressed on primaryButton", () => {
      const primaryButtonOnClick = vi.fn();
      const splitButtonComponent = renderComponent({ onClick: primaryButtonOnClick });
      const primaryButton = getPrimaryButton(splitButtonComponent);
      act(() => {
        primaryButton.focus();
        userEvent.keyboard(ENTER_KEY);
      });
      expect(primaryButtonOnClick.mock.calls.length).toBe(1);
    });

    it("opens the secondary content dialog when enter pressed on secondaryButton", async () => {
      const splitButtonComponent = renderComponent();
      const arrowButton = getSecondaryButton(splitButtonComponent);
      act(() => {
        arrowButton.focus();
        userEvent.keyboard(ENTER_KEY);
        vi.runAllTimers();
      });
      const expectedSecondaryDialog = await screen.findByText(secondaryContentText, {});
      expect(expectedSecondaryDialog).toBeTruthy();
    });
  });

  describe("with SplitButtonMenu", () => {
    it("should focus on first menu item", async () => {
      const splitButtonComponent = render(
        <SplitButton secondaryDialogContent={menuSecondaryContent}>{text}</SplitButton>
      );
      const arrowButton = getSecondaryButton(splitButtonComponent);
      act(() => {
        arrowButton.focus();
        userEvent.keyboard(ENTER_KEY);
      });
      vi.runAllTimers();
      let menu;
      await waitFor(async () => {
        menu = await splitButtonComponent.findByTestId(getTestId(ComponentDefaultTestId.MENU, splitMenuId));
        expect(menu).toBeTruthy();
      });

      const firstMenuItemId = `${getTestId(ComponentDefaultTestId.MENU_ITEM)}_0`;
      await waitFor(() => {
        expect(splitButtonComponent.getByTestId(firstMenuItemId)).toHaveFocus();
      });
    });
  });
});
