import { createComponentTemplate, Link } from "vibe-storybook-components";
import Checkbox from "../Checkbox";
import { createStoryMetaSettingsDecorator } from "../../../storybook";
import "./checkbox.stories.scss";

const metaSettings = createStoryMetaSettingsDecorator({ component: Checkbox });
const checkboxTemplate = createComponentTemplate(Checkbox);

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
  decorators: metaSettings.decorators
};

export const Overview = {
  render: checkboxTemplate.bind({}),
  name: "Overview",

  args: {
    label: "Option",
    defaultChecked: true
  }
};

export const States = {
  render: () => (
    <>
      <Checkbox label="Regular" />
      <Checkbox label="Selected" checked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled checked" disabled checked />
      <Checkbox label="Disabled indeterminate" disabled indeterminate />
    </>
  ),
  name: "States"
};

export const SingleCheckbox = {
  render: () => (
    <Checkbox
      checked
      label={
        <>
          I agree to the
          <Link size={Link.sizes.SMALL} href={"#"}>
            Terms of Service
          </Link>
          and{" "}
          <Link size={Link.sizes.SMALL} href={"#"} withoutSpacing>
            Privacy Policy
          </Link>
          .
        </>
      }
    />
  ),

  name: "Single checkbox"
};
