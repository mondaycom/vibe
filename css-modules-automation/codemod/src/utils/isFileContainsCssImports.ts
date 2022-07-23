/**
 * Returns true if file code contains
 * @param file
 */

export const isFileContainsCssImports = (file: any) => {
  const fileCode: string = file.code;
  const regex = new RegExp(/(import) [aA-zZ{ },_*]*"[@./aA-zZ_-]*.(scss|css)/gs);
  return regex.test(fileCode);
};
