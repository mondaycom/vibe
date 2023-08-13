import * as postcss from "postcss";
import { removeFormatting } from "./remove-formatting";

export function rootToString(root: postcss.Root | postcss.Document): string {
  return removeFormatting(root.toString());
}
