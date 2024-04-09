import { format, Options } from "prettier";
import parserHtml from "prettier/parser-html";
import parserTypeScript from "prettier/parser-typescript";

export function formatCode(code: string): string {
  const options: Options = {
    parser: "typescript",
    arrowParens: "avoid",
    trailingComma: "es5",
    plugins: [parserHtml, parserTypeScript]
  };
  try {
    return format(code, options).replace(/;\s*$/, "");
  } catch (e) {
    throw new Error(`[LiveEdit Error]: Error formatting code: ${e}`);
  }
}
