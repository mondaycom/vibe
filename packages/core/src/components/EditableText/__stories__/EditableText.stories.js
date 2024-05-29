import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import EditableText from "../EditableText";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import { overviewPlaySuite } from "../__tests__/EditableText.interactions";
import styles from "./EditableText.stories.module.scss";

const metaSettings = createStoryMetaSettingsDecorator({
  component: EditableText,
  enumPropNamesArray: ["weight", "type"],
  actionPropsArray: ["onChange"]
});

export default {
  title: "Inputs/EditableText",
  component: EditableText,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const EditableTextTemplate = createComponentTemplate(EditableText);

export const Overview = {
  render: EditableTextTemplate.bind({}),
  args: {
    value: "This text is an editable text",
    type: EditableText.types.TEXT2
  },
  play: overviewPlaySuite,
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Types = {
  render: () => (
    <div className={styles.typesContainer}>
      <div className={styles.typeContainer}>
        <EditableText
          type={EditableText.types.TEXT1}
          weight={EditableText.weights.NORMAL}
          value="Text1 Normal"
          className={styles.editableText}
        />
        <EditableText
          type={EditableText.types.TEXT1}
          weight={EditableText.weights.MEDIUM}
          value="Text1 Medium"
          className={styles.editableText}
        />
        <EditableText
          type={EditableText.types.TEXT1}
          weight={EditableText.weights.BOLD}
          value="Text1 Bold"
          className={styles.editableText}
        />
      </div>
      <div className={styles.typeContainer}>
        <EditableText
          type={EditableText.types.TEXT2}
          weight={EditableText.weights.NORMAL}
          value="Text2 Normal"
          className={styles.editableText}
        />
        <EditableText
          type={EditableText.types.TEXT2}
          weight={EditableText.weights.MEDIUM}
          value="Text2 Medium"
          className={styles.editableText}
        />
        <EditableText
          type={EditableText.types.TEXT2}
          weight={EditableText.weights.BOLD}
          value="Text2 Bold"
          className={styles.editableText}
        />
      </div>
      <div className={styles.typeContainer}>
        <EditableText
          type={EditableText.types.TEXT3}
          weight={EditableText.weights.NORMAL}
          value="Text3 Normal"
          className={styles.editableText}
        />
        <EditableText
          type={EditableText.types.TEXT3}
          weight={EditableText.weights.MEDIUM}
          value="Text3 Medium"
          className={styles.editableText}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      liveEdit: {
        scope: { styles }
      }
    }
  }
};
