import transform from "../DatePicker-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";
import { describe } from "vitest";

describe("DatePicker component migration", () => {
  defineInlineTest(
    transform,
    {},
    `import { DatePicker } from "@vibe/core";`,
    `import { DatePicker } from "@vibe/core/next";`,
    "should move DatePicker import from @vibe/core to @vibe/core/next"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker, type DatePickerProps } from "@vibe/core";`,
    `import { DatePicker, type DatePickerProps } from "@vibe/core/next";`,
    "should move DatePicker and DatePickerProps together"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker, Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";
import { DatePicker } from "@vibe/core/next";`,
    "should split mixed import: keep Button in @vibe/core, move DatePicker to @vibe/core/next"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker, type DatePickerProps, Button, type RangeDate } from "@vibe/core";`,
    `import { Button } from "@vibe/core";
import { DatePicker, type DatePickerProps, type RangeDate } from "@vibe/core/next";`,
    "should split mixed import with multiple DatePicker-related specifiers"
  );

  defineInlineTest(
    transform,
    {},
    `import { Button, Tooltip } from "@vibe/core";`,
    `import { Button, Tooltip } from "@vibe/core";`,
    "should not modify imports without DatePicker-related specifiers"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker } from "@vibe/core/next";`,
    `import { DatePicker } from "@vibe/core/next";`,
    "should not modify imports already from @vibe/core/next"
  );

  defineInlineTest(
    transform,
    {},
    `<DatePicker date={date} />`,
    `<DatePicker date={date} />`,
    "should not modify files without @vibe/core import"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker as MyDatePicker } from "@vibe/core";`,
    `import { DatePicker as MyDatePicker } from "@vibe/core/next";`,
    "should preserve aliases when moving import"
  );

  defineInlineTest(
    transform,
    {},
    `import { DatePicker as MyDatePicker, Button } from "@vibe/core";`,
    `import { Button } from "@vibe/core";
import { DatePicker as MyDatePicker } from "@vibe/core/next";`,
    "should preserve aliases when splitting mixed import"
  );
});
