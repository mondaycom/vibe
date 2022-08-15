import { upperCase } from "lodash";
import { printWithCondition } from "./commonProcess/print";

export const convertFileNameToUpperCase = (filename: string): string => {
  printWithCondition(false, "convertFileNameToUpperCase, filename", filename);
  const parts = filename.split("/");
  const name = parts[parts.length - 1];
  const nameWithoutExtension = name.split(".")[0];
  let upperCaseName = upperCase(nameWithoutExtension).replaceAll(" ", "_");
  printWithCondition(false, "convertFileNameToUpperCase, upperCaseName", upperCaseName);
  return upperCaseName;
};
