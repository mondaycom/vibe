import React from "react";
import { bottomLine, getFull, userPointOfView, oneCta, specificCta, cutTheFluff } from "../assets";
import { Value } from "./values";
import "./valuesUXWriting.scss";

const BASE_CLASS = "monday-storybook-principles";

export const RulesUXWriting = () => (
  <div className={BASE_CLASS}>
    <Value
      imgSrc={bottomLine}
      title="Bottom line first"
      description="Start every message with the most important information."
    />
    <Value
      imgSrc={getFull}
      title="Give full context"
      description="Provide enough context so users know exactly where they are."
    />
    <Value
      imgSrc={userPointOfView}
      title="Focus on the user's point of view"
      description="Focus on what the user wants to do and what they stand to gain, not on your own perspective."
    />
    <Value
      imgSrc={oneCta}
      title="One CTA"
      description="Present only one CTA at a time. It makes decisions easier and faster."
    />
    <Value
      imgSrc={specificCta}
      title="Use specific CTAs"
      description="Ensure that CTAs respond directly to the header."
    />
    <Value imgSrc={cutTheFluff} title="Cut the fluff" description="Write briefly and to the point." />
  </div>
);
