#!/bin/sh

INPUT_FILE="shell_scripts/files_to_prettify.txt"

if ! test -f "$INPUT_FILE"; then
  echo "prettify_modified_files.sh: file '$INPUT_FILE' doesn't exist"
  exit 0;
fi

while read -r filePath; do
  # Prettify file
  prettier -w "$filePath"

done < "$INPUT_FILE"

# Remove input file itself
rm "$INPUT_FILE";