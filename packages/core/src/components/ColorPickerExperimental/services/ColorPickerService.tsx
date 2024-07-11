export function isHexColor(input: any): boolean {
  if (typeof input !== "string") {
    return false; // Not a string, so it can't be a hex color
  }
  const hexPattern = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;
  return hexPattern.test(input);
}
