import { defineInlineTest } from "jscodeshift/src/testUtils";
import transform from "../input-field-component-import-migration";

describe("InputField component migration", () => {
  defineInlineTest(
    transform,
    {},
    `
        import { InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular" />
      `,
    `
        import { TextField } from "monday-ui-react-core";
        <TextField autoFocus placeholder="TextField imported regular" />
      `,
    "should update import and update self-closing jsx accordingly"
  );

  defineInlineTest(
    transform,
    {},
    ` 
        import { InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular"></InputField>
      `,
    `
        import { TextField } from "monday-ui-react-core";
        <TextField autoFocus placeholder="TextField imported regular"></TextField>
      `,
    "should update import and update jsx accordingly"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { InputField } from "monday-ui-react-core";
        <>
          <InputField autoFocus placeholder="TextField imported regular" />
          <InputField />
          <InputField debounceRate={300} />
        </>
      `,
    `
        import { TextField } from "monday-ui-react-core";
        <>
          <TextField autoFocus placeholder="TextField imported regular" />
          <TextField />
          <TextField debounceRate={300} />
        </>
      `,
    "should update import and update multiple jsx usages"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { InputField as SC } from "monday-ui-react-core";
        <SC autoFocus placeholder="TextField as alias" />
      `,
    `
        import { TextField as SC } from "monday-ui-react-core";
        <SC autoFocus placeholder="TextField as alias" />
      `,
    "should update import but not update jsx when component is imported with an alias"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { InputField as SC } from "monday-ui-react-core";
        <>
          <SC autoFocus placeholder="TextField as alias" />
          <SC />
          <SC debounceRate={300} />
        </>
      `,
    `
        import { TextField as SC } from "monday-ui-react-core";
        <>
          <SC autoFocus placeholder="TextField as alias" />
          <SC />
          <SC debounceRate={300} />
        </>
      `,
    "should update import but not update any jsx usage when component is imported with an alias"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { TextField, InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular" />
      `,
    `
        import { TextField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular" />
      `,
    "should remove 'InputField' when both 'TextField' and 'InputField' are imported from core"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { TextField } from "other-component-library";
        import { InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular" />
      `,
    `
        import { TextField } from "other-component-library";
        import { TextField as InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="TextField imported regular" />
      `,
    "should update 'InputField' with alias when both 'TextField' and 'InputField' are imported, and 'TextField' is not imported from core"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { OtherComponent } from "monday-ui-react-core";
        <OtherComponent autoFocus placeholder="I'm not TextField" />
      `,
    `
        import { OtherComponent } from "monday-ui-react-core";
        <OtherComponent autoFocus placeholder="I'm not TextField" />
      `,
    "should not change unrelated imports"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { OtherComponent as InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="I'm not TextField" />
      `,
    `
        import { OtherComponent as InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="I'm not TextField" />
      `,
    "should not change unrelated imports that are aliased as InputField"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { TextField as InputField } from "monday-ui-react-core/next";
        <InputField autoFocus placeholder="I'm TextField" />
      `,
    `
        import { TextField as InputField } from "monday-ui-react-core/next";
        <InputField autoFocus placeholder="I'm TextField" />
      `,
    "should not change TextField from core/next import that is aliased as InputField"
  );

  defineInlineTest(
    transform,
    {},
    `
        import { InputField } from "monday-ui-react-core";
        <InputField autoFocus placeholder="I'm InputField" size={InputField.sizes.other.SMALL} />
      `,
    `
        import { TextField } from "monday-ui-react-core";
        <TextField autoFocus placeholder="I'm InputField" size={TextField.sizes.other.SMALL} />
      `,
    "should change props that uses the namespace of 'InputField' to 'TextField'"
  );
});
