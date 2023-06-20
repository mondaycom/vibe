import { appendFileSync, existsSync } from "fs";
import * as path from "path";

// List of files to delete after the process
const FILES_TO_RENAME_LIST_FILE = path.join(__dirname, "..", "..", "shell_scripts", "files_to_rename.txt");

// Can't rename files in the process - it break traverse, so put them in list to rename afterwards
export const markFileForRenaming = (filename: string) => {
  if (existsSync(filename)) {
    appendFileSync(FILES_TO_RENAME_LIST_FILE, filename + "\n");
  }
};
