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

const randomProperty = function(obj) {
  const keys = Object.keys(obj);
  return obj[keys[(keys.length * Math.random()) << 0]];
};

const chipsPropsById = {
  1: { key: "1", id: "1", label: "Label chip" },
  2: { key: "2", id: "2", label: "Chip with left icon", leftIcon: "fa fa-star-o", color: Chips.colors.NEGATIVE },
  3: { key: "3", id: "3", label: "Chip with right icon", rightIcon: "fa fa-info", color: Chips.colors.POSITIVE },
  4: { key: "4", id: "4", label: "Disabled chip", leftIcon: "fa fa-star-o", rightIcon: "fa fa-info", disabled: true },
  5: { key: "5", id: "5", label: "Label chip 5", color: randomProperty(Chips.colors) },
  6: { key: "6", id: "6", label: "Label chip 6", color: randomProperty(Chips.colors) },
  7: { key: "7", id: "7", label: "Label chip 7", color: randomProperty(Chips.colors) },
  8: { key: "8", id: "8", label: "Label chip 8", color: randomProperty(Chips.colors) },
  9: { key: "9", id: "9", label: "Label chip 9", color: randomProperty(Chips.colors) }
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

  const onAdd = useCallback(() => {
    const missingId = Object.keys(chipsPropsById).find(id => !chipsIds.includes(id));
    if (missingId) {
      setChipsIds(chipsIds.concat([missingId]));
    }
  }, [chipsIds, setChipsIds]);

  return (
    <div className="chips-wrapper">
      {chipsIds.map(id => (
        <Chips className="my-chip" onDelete={onDelete} {...chipsPropsById[id]} />
      ))}
      <Button className="reset-button" onClick={onReset} size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY}>
        Reset
      </Button>
      <Button className="add-button" onClick={onAdd} size={Button.sizes.SMALL} kind={Button.kinds.TERTIARY}>
        Add
      </Button>
    </div>
  );
};

export default {
  title: "Components/Chips",
  component: Chips,
  decorators: [withPerformance]
};
