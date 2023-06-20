import { appendFileSync, existsSync } from "fs";
import * as path from "path";
import { convertFileNameToUpperCase } from "./convertFileNameToUpperCase";
import { getFileLastName } from "./getFileLastName";
import { snakeCase } from "lodash";

// List of files to prettify after the process
const FILES_WITH_ADDED_DATA_TEST_ID_LIST_FILE = path.join(
  __dirname,
  "..",
  "..",
  "shell_scripts",
  "files_with_added_data_test_id.txt"
);

export const writeDownFileWithDataTestId = (filename: string) => {
  if (existsSync(filename)) {
    const upperCaseName = convertFileNameToUpperCase(filename);
    const fileLastNameWithoutExtension = snakeCase(getFileLastName(filename, false)).replaceAll("_", "-");

    appendFileSync(FILES_WITH_ADDED_DATA_TEST_ID_LIST_FILE, `${upperCaseName}: "${fileLastNameWithoutExtension}",\n`);
  }
};
