import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import AlertBanner from "../AlertBanner";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import AlertBannerText from "../AlertBannerText/AlertBannerText";

const NOOP = () => {};

describe("<AlertBanner />", () => {
  afterEach(() => {
    cleanup();
  });

  describe("on close", () => {
    let onCloseStub;
    let alertBannerComponent;

    beforeEach(() => {
      onCloseStub = jest.fn();
      alertBannerComponent = render(
        <AlertBanner onClose={onCloseStub}>
          <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <AlertBannerButton onClick={NOOP}>Lorem Ipsum Salura</AlertBannerButton>
        </AlertBanner>
      );
    });

    it("should be able to close alert banner when clicking on close button", () => {
      const { container } = alertBannerComponent;
      fireEvent.click(container.querySelector(".monday-alert-banner__alert-banner-close-btn"));
      expect(onCloseStub.mock.calls.length).toBe(1);
    });

    describe("a11y", () => {
      it("should add the label", () => {
        const ariaLabel = "Lable Name";
        const { getByLabelText } = render(<AlertBanner ariaLabel={ariaLabel} />);
        const alertBannerComponentLabel = getByLabelText(ariaLabel);
        expect(alertBannerComponentLabel).toBeTruthy();
      });
    });
  });
});
