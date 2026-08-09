import transform from "../LinearProgressBar-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string, importName = "LinearProgressBar"): string {
  return `import { ${importName} } from "@vibe/core";\n${source}`;
}

describe("LinearProgressBar component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <LinearProgressBar value={50} />;`),
    `import { ProgressBar } from "@vibe/core";\nconst element = <ProgressBar value={50} />;`,
    "should rename LinearProgressBar to ProgressBar in import and JSX"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <LinearProgressBar value={50} max={100} />;`),
    `import { ProgressBar } from "@vibe/core";\nconst element = <ProgressBar value={50} max={100} />;`,
    "should rename LinearProgressBar with multiple props"
  );

  defineInlineTest(
    transform,
    {},
    `import { LinearProgressBar, LinearProgressBarProps } from "@vibe/core";
const props: LinearProgressBarProps = { value: 50 };
const element = <LinearProgressBar value={50} />;`,
    `import { ProgressBar, ProgressBarProps } from "@vibe/core";
const props: ProgressBarProps = { value: 50 };
const element = <ProgressBar value={50} />;`,
    "should rename both LinearProgressBar and LinearProgressBarProps"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "@vibe/core";\nconst element = <Button />;`,
    `import { Button } from "@vibe/core";\nconst element = <Button />;`,
    "should not modify other components"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button } from "another-library";\nconst element = <Button />;`,
    `import { Button } from "another-library";\nconst element = <Button />;`,
    "should not modify components from another library"
  );
});
