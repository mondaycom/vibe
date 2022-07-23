/**
 * Returns true file is .jsx extension and not in __stories__ or __tests__ or hooks folder
 * @param file
 */
export const isComponentJsxFile = (file: any) => {
  const filepath = file.opts.filename;
  const filename = filepath.split("/").pop();
  return !!(
    filename.endsWith(".jsx") &&
    !filepath.includes("__stories__") &&
    !filepath.includes("__tests__") &&
    !filepath.includes("hooks")
  );
};
