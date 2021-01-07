import React from "react";
import { text, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import * as Colors from "../../../constants/colors.json";
import Banner from "../Banner";
import { StoryStateRow, StoryStateColumn } from "../../storybook-helpers";

const EXAMPLE_IMAGE =
  "https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/monday-logo-x2.png";

export const Sandbox = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn centerize>
        <Banner
          id="Sandbox"
          text={text("Text", "Test knob value")}
          title={text("Title", "Test title value")}
          subtitle={text("subTitle", "Test subtitle value")}
          imageSrc={text("Image source", EXAMPLE_IMAGE)}
          imageAlt={text("Image text description", "Test image alt")}
          imagePosition={select("Image position", Object.values(Banner.imagePosition), Banner.imagePosition.LEFT)}
        />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const ImagePositions = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Top Image" centerize>
        <Banner
          id="TopPosition"
          imagePosition={Banner.imagePosition.TOP}
          title="Example Title"
          subtitle="Example Subtitle"
          imageSrc={EXAMPLE_IMAGE}
        />
      </StoryStateColumn>
      <StoryStateColumn title="Right Image" centerize>
        <Banner
          id="RightPosition"
          imagePosition={Banner.imagePosition.RIGHT}
          title="Example Title"
          subtitle="Example Subtitle"
          imageSrc={EXAMPLE_IMAGE}
        />
      </StoryStateColumn>
      <StoryStateColumn title="Bottom Image" centerize>
        <Banner
          id="BottomPosition"
          imagePosition={Banner.imagePosition.BOTTOM}
          title="Example Title"
          subtitle="Example Subtitle"
          imageSrc={EXAMPLE_IMAGE}
        />
      </StoryStateColumn>
      <StoryStateColumn title="Left Image" centerize>
        <Banner
          id="LeftPosition"
          imagePosition={Banner.imagePosition.LEFT}
          title="Example Title"
          subtitle="Example Subtitle"
          imageSrc={EXAMPLE_IMAGE}
        />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const TitleCustomRender = () => {
  const customTitleRender = title => {
    const colorsArray = Object.values(Colors);
    if (!title) return title;
    const words = title.split(" ");
    return words.map((word, i) => {
      const selectedColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
      return (
        <span key={`titleWord_${i}`} style={{ color: selectedColor }}>
          {`${word} `}
        </span>
      );
    });
  };

  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Title custom render" centerize>
          <Banner
            title={text("Title", "Test title value")}
            subtitle="Example Subtitle"
            renderTitle={customTitleRender}
            imageSrc={EXAMPLE_IMAGE}
          />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export const SubtitleCustomRender = () => {
  const customSubtitleRender = subtitle => {
    const colorsArray = Object.values(Colors);
    if (!subtitle) return subtitle;
    const words = subtitle.split(" ");
    return words.map((word, i) => {
      const selectedColor = colorsArray[Math.floor(Math.random() * colorsArray.length)];
      return (
        <span key={`SubtitleWord_${i}`} style={{ color: selectedColor }}>
          {`${word} `}
        </span>
      );
    });
  };

  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn title="Subtitle Custom render" centerize>
          <Banner
            subtitle={text("Subtitle", "Test subtitle value")}
            title="Example Title"
            renderSubtitle={customSubtitleRender}
            imageSrc={EXAMPLE_IMAGE}
          />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export const Empty = () => {
  return (
    <section>
      <StoryStateRow>
        <StoryStateColumn centerize>
          <Banner />
        </StoryStateColumn>
      </StoryStateRow>
    </section>
  );
};

export default {
  title: "Components/Banner",
  component: Banner,
  decorators: [withPerformance]
};
