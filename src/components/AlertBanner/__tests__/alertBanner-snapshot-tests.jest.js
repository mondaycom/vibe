import React from "react";
import renderer from "react-test-renderer";
import AlertBanner from "../AlertBanner";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";
import AlertBannerButton from "../AlertBannerButton/AlertBannerButton";
import AlertBannerText from "../AlertBannerText/AlertBannerText";
import { NOOP } from "../../../utils/function-utils";

describe("AlertBanner", () => {
  it("should render correctly without props", () => {
    const tree = renderer.create(<AlertBanner />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("shuold render correctly with props", () => {
    const tree = renderer
      .create(
        <AlertBanner
          onClose={NOOP}
          backgroundColor={AlertBanner.backgroundColors.NEGATIVE}
          ariaLabel="lorem-banner"
          className="my-lorem-ipsum-banner"
        >
          <AlertBannerText text="Lorem ipsum dolor sit amet" />
        </AlertBanner>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correctly with text and link", () => {
    const tree = renderer
      .create(
        <AlertBanner onClose={NOOP}>
          <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
        </AlertBanner>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correctly with text and button", () => {
    const tree = renderer
      .create(
        <AlertBanner onClose={NOOP}>
          <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <AlertBannerButton onClick={NOOP}>Lorem Ipsum Salura</AlertBannerButton>
        </AlertBanner>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render with correctly with multiple elements", () => {
    const tree = renderer
      .create(
        <AlertBanner onClose={NOOP}>
          <AlertBannerText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
          <AlertBannerLink text="Lorem ipsum" href="https://monday.com" />
          <AlertBannerText text="sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
          <AlertBannerButton onClick={NOOP}>Lorem Ipsum Bailar</AlertBannerButton>
        </AlertBanner>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with hidden close button", () => {
    const tree = renderer.create(<AlertBanner isCloseHidden />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly with background color", () => {
    const tree = renderer.create(<AlertBanner backgroundColor={AlertBanner.backgroundColors.POSITIVE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
