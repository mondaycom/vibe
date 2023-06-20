#!/bin/sh

# Reads input file line by line and remove according .scss file
INPUT_FILE="shell_scripts/files_to_rename.txt"

if ! test -f "$INPUT_FILE"; then
  echo "rename_modified_stylesheet_files.sh: file '$INPUT_FILE' doesn't exist"
  exit 0;
fi

while read -r filePath; do
  fileDirPath=$(dirname -- "$filePath")
  fileName=$(basename -- "$filePath")
  fileName="${fileName%.*}"

  if test -f "$fileDirPath/$fileName.scss"; then
      # TODO Instead of cp should be mv
      cp "$fileDirPath/$fileName.scss" "$fileDirPath/$fileName.module.scss"
  fi

done < "$INPUT_FILE"

# Remove input file itself
rm "$INPUT_FILE";