/**
 * Returns true if file code contains css imports (modular stylesheet doesn't count)
 * @param fileCode
 */
export const doesFileContainsPureCssImports = (fileCode: string) => {
  const regex = new RegExp(/import [aA-zZ{ },_*]*"[@./aA-zZ_-]*.(scss|css)";/, "gm");
  const matches = fileCode.match(regex);
  if (matches) {
    for (let i = 0; i < matches.length; ++i) {
      if (!matches[i].includes(".module.scss") && !matches[i].includes(".module.css")) {
        return true;
      }
    }
  }
  return false;
};
