import { existsSync, renameSync } from "fs";
import { printWithCondition } from "./print";

export const getCssModulesFileName = (path: string) => {
  return path.replace(".scss", ".module.scss");
};

export const renameStylesheetFile = (filename: string) => {
  if (existsSync(filename)) {
    renameSync(filename, getCssModulesFileName(filename));
    printWithCondition(true, `^^^ renameStylesheetFile, ${filename} -> ${getCssModulesFileName(filename)}`);
  }
};
