import transform from "../featured-icon-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

describe("Featured Icon migration comprehensive tests", () => {
  defineInlineTest(
    transform,
    {},
    `import { Featured } from "monday-ui-react-core/icons";
    <Icon icon={Featured} />`,
    `import { Upgrade } from "monday-ui-react-core/icons";
    <Icon icon={Upgrade} />`,
    "should replace named 'Featured' with 'Upgrade'"
  );

  defineInlineTest(
    transform,
    {},
    `import { Featured, OtherIcon } from "monday-ui-react-core/icons";
    <Icon icon={Featured} />`,
    `import { Upgrade, OtherIcon } from "monday-ui-react-core/icons";
    <Icon icon={Upgrade} />`,
    "should replace 'Featured' with 'Upgrade' and retain other imports"
  );

  defineInlineTest(
    transform,
    {},
    `import { Heart } from "monday-ui-react-core/icons";
    <Icon icon={Heart} />`,
    `import { Heart } from "monday-ui-react-core/icons";
    <Icon icon={Heart} />`,
    "should not change any other icons"
  );
});
