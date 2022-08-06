/**
 * Returns true file is .jsx|.tsx extension and not in __stories__ or __tests__ or hooks folder
 * @param filename
 */
export const isComponentFile = (filename: any) => {
  const filenameLastPart = filename.split("/").pop();
  return !!(
    (filenameLastPart.endsWith(".jsx") || filenameLastPart.endsWith(".tsx")) &&
    !filename.includes("__stories__") &&
    !filename.includes("__tests__") &&
    !filename.includes("hooks")
  );
};
