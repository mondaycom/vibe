#!/bin/sh

if [ -z "$1" ]
  then
    echo "Error: no path argument was passed - pass a directory or a specific file";
    exit;
fi

# Traverse files at path
codemod -p src/index.ts "$1";

# Prettify files on path
prettier -w "$1"

# Rename processed .scss files from the list to have .module.scss extension (and delete the list-file itself)
./shell_scripts/rename_modified_stylesheet_files.sh;