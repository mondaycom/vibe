import transform from "../CustomSvgIcon-component-migration";
import { defineInlineTest } from "jscodeshift/src/testUtils";

function prependImport(source: string): string {
  return `import { CustomSvgIcon } from "@vibe/core";\n${source}`;
}

describe("CustomSvgIcon component migration", () => {
  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <CustomSvgIcon src={icon} onClick={handleClick} />;`),
    prependImport(`const element = <CustomSvgIcon src={icon} />;`),
    "should remove onClick prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <CustomSvgIcon src={icon} clickable />;`),
    prependImport(`const element = <CustomSvgIcon src={icon} />;`),
    "should remove clickable boolean prop"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <CustomSvgIcon src={icon} onClick={handleClick} clickable={true} />;`),
    prependImport(`const element = <CustomSvgIcon src={icon} />;`),
    "should remove both onClick and clickable props"
  );

  defineInlineTest(
    transform,
    {},
    prependImport(`const element = <CustomSvgIcon src={icon} className="my-icon" />;`),
    prependImport(`const element = <CustomSvgIcon src={icon} className="my-icon" />;`),
    "should not modify CustomSvgIcon without onClick or clickable props"
  );

  defineInlineTest(
    transform,
    {},
    `import { CustomSvgIcon } from "another-library";\nconst element = <CustomSvgIcon src={icon} onClick={handleClick} />;`,
    `import { CustomSvgIcon } from "another-library";\nconst element = <CustomSvgIcon src={icon} onClick={handleClick} />;`,
    "should not modify CustomSvgIcon imported from another library"
  );
});
