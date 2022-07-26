import { renameSync } from "fs";

export const getCssModulesFileName = (path: string) => {
  return path.replace(".scss", ".module.scss");
};

export const renameStylesheetFile = (filename: string) => {
  renameSync(filename, getCssModulesFileName(filename));
};
