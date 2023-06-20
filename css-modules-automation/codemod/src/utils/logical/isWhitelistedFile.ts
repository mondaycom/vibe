import { getWhitelistedFiles, shortenAbsolutePath } from "../commonProcess/getWhitelistedFiles";

const whitelistedFiles: Set<string> = getWhitelistedFiles();

/**
 * Is file to be ignored by the process
 * @param filename
 */
export const isWhitelistedFile = (filename: string): boolean => {
  return whitelistedFiles.has(shortenAbsolutePath(filename));
};
