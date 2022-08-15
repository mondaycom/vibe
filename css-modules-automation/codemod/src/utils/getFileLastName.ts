export const getFileLastName = (filename: string, withExtension: boolean): string => {
  const parts = filename.split("/");
  const name = parts[parts.length - 1];
  if (!withExtension) {
    return name.split(".")[0];
  }
  return name
}