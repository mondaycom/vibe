/**
 * Returns true file is .jsx|.tsx extension and not in __stories__ or __tests__ or hooks folder
 * @param file
 */
export const isComponentFile = (file: any) => {
  const filepath = file.opts.filename;
  const filename = filepath.split("/").pop();
  return !!(
    (filename.endsWith(".jsx") || filename.endsWith(".tsx")) &&
    !filepath.includes("__stories__") &&
    !filepath.includes("__tests__") &&
    !filepath.includes("hooks")
  );
};
