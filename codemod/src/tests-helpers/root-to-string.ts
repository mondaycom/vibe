import * as postcss from "postcss";
import { removeFormatting } from "./remove-formatting";

export function rootToString(root: postcss.Root): string {
  return removeFormatting(root.toString());
}
