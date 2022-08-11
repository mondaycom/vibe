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