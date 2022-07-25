#bin/zsh
# Reads input file line by line and replace according .scss files with .module.scss files with same content
INPUT_FILE="./cssModulesReplaceFiles_Input.txt"

while read -r line; do
  echo "line: $line"

  fileDirPath=$(dirname -- "$line")
  fileName=$(basename -- "$line")
  fileName="${fileName%.*}"

  cd "$fileDirPath" || (echo "Error such path as $fileDirPath doesn't exists! Paths to files should be absolute" && exit)

  if test -f "$fileName.scss"; then
      echo "$fileName.scss exists."
      cp "$fileName.scss" "$fileName.module.scss"
      rm "$fileName.scss"
  fi

done < "$INPUT_FILE"