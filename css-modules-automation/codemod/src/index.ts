import { PluginObj } from "@babel/core";
import { defaults } from "lodash";
import { importVisitors } from "./utils/visitors/importVisitors";

type PluginOptions = {
  importIdentifier: "styles";
};

export type State = {
  opts: PluginOptions;
  classNames: Map<string, string>;
  cxImported: boolean;
  camelCaseImported: boolean;
  camelCaseImportNeeded: boolean;
};

const PLUGIN_DEFAULTS = {
  importIdentifier: "styles"
};

// 1: Starting point for traverse process
export default (): PluginObj<State> => ({
  name: "react-css-modules",
  visitor: {
    Program: (programPath, state) => {
      // 2
      programPath.traverse(importVisitors, {
        cxImported: false,
        camelCaseImported: false,
        camelCaseImportNeeded: false,
        classNames: new Map<string, string>(),
        opts: defaults({}, state.opts, PLUGIN_DEFAULTS)
      });
    }
  }
});

// TODO add styles[`camelCase(${AVATAR_CSS_BASE_CLASS})`] or styles.avatarCssBaseClass* (* value of the const -> through map)
//  e.g. Avatar usage of AVATAR_CSS_BASE_CLASS

// TODO in ObjecyProperty visitor: sometimes identifiers can be just stringLiterals e.g. empty class Combobox

// TODO replace TemplateLiteral inside ObjectProperty
