#!/bin/sh

if [ -z "$1" ]
  then
    echo "Error: no path argument was passed - pass a directory or a specific file";
    exit;
fi

# Traverse files at path
# Add data-testid attributes
codemod -p babel-plugin-react-data-testid "$1";
# Main traverse
codemod -p src/index.ts "$1";

# Prettify files from the list
./shell_scripts/prettify_modified_files.sh;

# Rename processed .scss files from the list to have .module.scss extension
./shell_scripts/rename_modified_stylesheet_files.sh;