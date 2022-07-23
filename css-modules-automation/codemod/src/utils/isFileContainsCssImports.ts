/**
 * Returns true if file code contains
 * @param file
 */

export const isFileContainsCssImports = (file: any) => {
  const fileCode: string = file.code;
  const regex = new RegExp(/import [aA-zZ{ },_*]*"[@./aA-zZ_-]*.(scss|css)";/, "m");
  return regex.test(fileCode);
};
