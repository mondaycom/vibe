import transform from "../LinearProgressBar-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("LinearProgressBar component migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBar } from "@vibe/core";
const element = <LinearProgressBar value={50} />;`,
    `import { ProgressBar } from "@vibe/core";
const element = <ProgressBar value={50} />;`,
    "should rename LinearProgressBar to ProgressBar in import and JSX"
  );

  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBar, Button } from "@vibe/core";
const element = <LinearProgressBar value={30} size="large" />;`,
    `import { ProgressBar, Button } from "@vibe/core";
const element = <ProgressBar value={30} size="large" />;`,
    "should rename LinearProgressBar while keeping other imports intact"
  );

  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBar as LPB } from "@vibe/core";
const element = <LPB value={50} />;`,
    `import { ProgressBar as LPB } from "@vibe/core";
const element = <LPB value={50} />;`,
    "should rename import but preserve alias and JSX usage"
  );

  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBarProps } from "@vibe/core";
const props: LinearProgressBarProps = { value: 50 };`,
    `import { ProgressBarProps } from "@vibe/core";
const props: ProgressBarProps = { value: 50 };`,
    "should rename LinearProgressBarProps type import to ProgressBarProps"
  );

  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBar, LinearProgressBarProps } from "@vibe/core";
const element = <LinearProgressBar value={50} />;
const props: LinearProgressBarProps = { value: 50 };`,
    `import { ProgressBar, ProgressBarProps } from "@vibe/core";
const element = <ProgressBar value={50} />;
const props: ProgressBarProps = { value: 50 };`,
    "should rename both component and type imports together"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";
const element = <Button />;`,
    `import { Button } from "@vibe/core";
const element = <Button />;`,
    "should not modify files without LinearProgressBar"
  );
});
