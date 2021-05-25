import React, { useState, useCallback } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Chips from "../Chips";
import Button from "../../Button/Button";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import "./chips.stories.scss";

export const Sandbox = () => (
  <div className="container">
    <ChipsWrapper />
  </div>
);

const chipsPropsById = {
  1: { key: "1", id: "1", label: "Label chip" },
  2: { key: "2", id: "2", label: "Chip with left icon", leftIcon: "fa fa-star-o", color: Chips.colors.NEGATIVE },
  3: { key: "3", id: "3", label: "Chip with right icon", rightIcon: "fa fa-info", color: Chips.colors.POSITIVE },
  4: { key: "4", id: "4", label: "Disabled chip", leftIcon: "fa fa-star-o", rightIcon: "fa fa-info", disabled: true }
};

const ChipsWrapper = () => {
  const [chipsIds, setChipsIds] = useState(["1", "2", "3", "4"]);
  const onDelete = useCallback(
    id => {
      const filteredIds = chipsIds.filter(chipId => chipId !== id);
      setChipsIds(filteredIds);
    },
    [chipsIds, setChipsIds]
  );
  const onReset = useCallback(() => {
    setChipsIds(["1", "2", "3", "4"]);
  }, [setChipsIds]);

  return (
    <div className="chips-wrapper">
      {chipsIds.map(id => (
        <Chips className="my-chip" onDelete={onDelete} {...chipsPropsById[id]} />
      ))}
      <Button className="reset-button" onClick={onReset} size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY}>
        Reset
      </Button>
    </div>
  );
};

export default {
  title: "Components/Chips",
  component: Chips,
  decorators: [withPerformance]
};
