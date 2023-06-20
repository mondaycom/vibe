import * as postcss from "postcss";

type ConversionSet = { from: string; to: string };
type ReplaceTokensParameters = ConversionSet[];
// Define your postcss plugin
export const replaceTokensPlugin = (root: postcss.Root, params: ReplaceTokensParameters) => {
  root.walkDecls((declaration: postcss.Declaration) => {
    for (const { from, to } of params) {
      if (declaration.value.includes(`--${from}`)) {
        declaration.value = declaration.value.replace(`--${from}`, `--${to}`);
      }
    }
  });
};
