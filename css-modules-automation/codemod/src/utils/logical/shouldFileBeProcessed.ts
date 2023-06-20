import { isComponentFile } from "./isComponentFile";
import { isWhitelistedFile } from "./isWhitelistedFile";
import { print } from "../commonProcess/print";
import { doesFileContainsPureCssImports } from "./doesFileContainsPureCssImports";

export const shouldFileBeProcessed = (file: any): boolean => {
  const filename = file.opts.filename;
  const fileCode = file.code;

  // Should be .jsx file
  if (!isComponentFile(filename)) {
    print("### importVisitors, file is not .jsx, so won't be processed", filename);
    return false;
  }

  // Should not be in the whitelist
  if (isWhitelistedFile(filename)) {
    print("### importVisitors, file is white listed and won't be processed ", filename);
    return false;
  }

  // Should contain css import
  if (!doesFileContainsPureCssImports(fileCode)) {
    print("### importVisitors, file doesn't contain css imports and won't be processed ", filename);
    return false;
  }

  return true;
};
