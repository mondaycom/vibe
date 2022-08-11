#!/bin/sh

# Reads input file line by line and remove according .scss file
INPUT_FILE="shell_scripts/files_to_rename.txt"

while read -r filePath; do
  fileDirPath=$(dirname -- "$filePath")
  fileName=$(basename -- "$filePath")
  fileName="${fileName%.*}"

  if test -f "$fileDirPath/$fileName.scss"; then
      mv "$fileDirPath/$fileName.scss" "$fileDirPath/$fileName.module.scss"
  fi

done < "$INPUT_FILE"

# Remove input file itself
rm "$INPUT_FILE";