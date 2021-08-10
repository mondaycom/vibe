import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { expect } from "../../../test/test-helpers";
import AlertBanner from "../AlertBanner";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import AlertBannerText from "../AlertBannerText/AlertBannerText";

const NOOP = () => {};

describe("<AlertBanner />", () => {
  afterEach(() => {
    cleanup();
  });

  it("should be able to render alert banner", () => {
    const { container } = render(<AlertBanner />);
  });

  it("should be able to render alert banner with link and text", () => {
    const { container } = render(
      <AlertBanner onClose={NOOP}>
        <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
      </AlertBanner>
    );
  });

  it("should be able to render alert banner with text and button", () => {
    const { container } = render(
      <AlertBanner onClose={NOOP}>
        <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
        <AlertBannerButton onClick={NOOP}>Lorem Ipsum Salura</AlertBannerButton>
      </AlertBanner>
    );
  });

  describe("on close", () => {
    let onCloseStub;
    let alertBannerComponent;
    beforeEach(() => {
      onCloseStub = sinon.stub();
      alertBannerComponent = render(
        <AlertBanner onClose={onCloseStub}>
          <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <AlertBannerButton onClick={NOOP}>Lorem Ipsum Salura</AlertBannerButton>
        </AlertBanner>
      );
    });

    afterEach(() => {
      onCloseStub.reset();
      cleanup();
    });

    it("should be able to close alert banner when clicking on close button", () => {
      const { container } = alertBannerComponent;
      fireEvent.click(container.querySelector(".monday-alert-banner__alert-banner-close-btn"));
      expect(onCloseStub).to.be.calledOnce;
    });
  });
});
