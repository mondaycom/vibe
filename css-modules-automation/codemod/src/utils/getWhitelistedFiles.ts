import { readFileSync } from "fs";
import { printWithCondition } from "./print";

const WHITELIST_PATH = ".whitelist.txt";

export const getWhitelistedFiles = (): Set<string> => {
  const content = readFileSync(WHITELIST_PATH).toString();
  const set = new Set<string>(content.split("\n").map(filename => shortenAbsolutePath(filename)));
  printWithCondition(true, "getWhitelistedFiles set", set);
  return set;
};

export const shortenAbsolutePath = (filename: string): string => {
  const index = filename.indexOf("/Development/");
  if (index === -1) {
    return filename.trim();
  }
  return filename.trim().slice(index + "/Development/".length);
};
