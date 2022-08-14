#!/bin/sh

INPUT_FILE="shell_scripts/files_to_prettify.txt"

while read -r filePath; do
  # Prettify file
  prettier -w "$filePath"

done < "$INPUT_FILE"

# Remove input file itself
rm "$INPUT_FILE";