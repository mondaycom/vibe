import { copyFileSync, existsSync } from "fs";
import { printWithCondition } from "./print";

export const getCssModulesFileName = (path: string) => {
  return path.replace(".scss", ".module.scss");
};

export const renameStylesheetFile = (filename: string) => {
  if (existsSync(filename)) {
    // TODO temp solution, cause renaming files break traverse
    // renameSync(filename, getCssModulesFileName(filename));
    copyFileSync(filename, getCssModulesFileName(filename));
    printWithCondition(false, `^^^ renameStylesheetFile, ${filename} -> ${getCssModulesFileName(filename)}`);
  }
};
