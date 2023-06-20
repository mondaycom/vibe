import { appendFileSync, existsSync } from "fs";
import * as path from "path";

// List of files to prettify after the process
const FILES_TO_PRETTIFY_LIST_FILE = path.join(__dirname, "..", "..", "shell_scripts", "files_to_prettify.txt");

export const markFileForPrettier = (filename: string) => {
  if (existsSync(filename)) {
    appendFileSync(FILES_TO_PRETTIFY_LIST_FILE, filename + "\n");
  }
};
