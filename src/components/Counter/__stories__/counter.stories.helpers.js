import { Link, Tip, UsageGuidelines } from "vibe-storybook-components";

export const TipCheckYourself = () => (
  <Tip title="Check yourself">
    Need to indicate information that is not numeric? Use the
    <Link href="/?path=/docs/data-display-label--docs" size={Link.sizes.SMALL}>
      Label
    </Link>
    component instead.
  </Tip>
);

export const Usage = () => (
  <UsageGuidelines
    guidelines={[
      "Counters are usually placed after the label of the item they're quantifying, such as the number of notifications. They should only be used to represent a number.",
      <div className="monday-storybook-counter_usage-link-line">
        The element the counter refers to should include{" "}
        <Link href="/?path=/docs/popover-tooltip--docs" withoutSpacing>
          Tooltip
        </Link>
        {", where necessary, to enhance user understanding. For example, a badge is used in conjunction with an icon."}
      </div>
    ]}
  />
);
