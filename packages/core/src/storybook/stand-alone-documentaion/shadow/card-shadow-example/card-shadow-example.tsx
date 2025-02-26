import React from "react";
import { Frame } from "vibe-storybook-components";
import { Button, Heading } from "../../../../components";
import { peopleColumn } from "../assets";
import classes from "./card-shadow-example.module.scss";

const CSS_BASE_CLASS = "card-shadow-example";

export const CardShadowExample = () => {
  return (
    <Frame>
      <div className={classes[CSS_BASE_CLASS]}>
        <img src={peopleColumn} alt="" />
        <Heading className={classes[`${CSS_BASE_CLASS}-title`]} type="h3">
          People Column
        </Heading>
        <span className={`${CSS_BASE_CLASS}-description`}>Get an instant overview of where things stand</span>
        <Button kind="secondary" className={classes[`${CSS_BASE_CLASS}-button`]}>
          Add to board
        </Button>
      </div>
    </Frame>
  );
};
