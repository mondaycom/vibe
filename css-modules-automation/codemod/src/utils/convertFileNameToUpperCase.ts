import { upperCase } from "lodash";
import { printWithCondition } from "./commonProcess/print";
import { getFileLastName } from "./getFileLastName";

export const convertFileNameToUpperCase = (filename: string): string => {
  printWithCondition(false, "convertFileNameToUpperCase, filename", filename);
  const nameWithoutExtension = getFileLastName(filename, false);
  let upperCaseName = upperCase(nameWithoutExtension).replaceAll(" ", "_");
  printWithCondition(false, "convertFileNameToUpperCase, upperCaseName", upperCaseName);
  return upperCaseName;
};
