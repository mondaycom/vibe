/**
 * Returns true if file code contains css imports
 * @param fileCode
 */

export const doesFileContainsCssImports = (fileCode: string) => {
  const regex = new RegExp(/import [aA-zZ{ },_*]*"[@./aA-zZ_-]*.(scss|css)";/, "m");
  return regex.test(fileCode);
};
