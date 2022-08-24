#!/bin/sh

INPUT_FILE="shell_scripts/files_to_run_list.txt";
ROOT_PATH="/Users/sergeyro/Development/monday-ui-react-core/src/components/";

while read -r filePath; do
  # Traverse files at path
  # Add data-testid attributes
  codemod --extensions ".tsx,.jsx" -p babel-plugin-react-data-testid "$ROOT_PATH$filePath";
  # Main traverse
  codemod --extensions ".tsx,.jsx" -p src/index.ts "$ROOT_PATH$filePath";

  # Prettify files from the list
  ./shell_scripts/prettify_modified_files.sh;

  # Rename processed .scss files from the list to have .module.scss extension
  ./shell_scripts/rename_modified_stylesheet_files.sh;
done < "$INPUT_FILE"