#!/bin/bash

# Define the source and destination paths
source_folder="./src/styles/mixins"
destination_folder="./dist/styles"

# Create folder if doesn't exist
if [ ! -d "$destination_folder" ]; then
    mkdir -p "$destination_folder"
fi

# Copy the styles folder and its contents
cp -r "$source_folder" "$destination_folder"

# Create index file in the dist root
echo "@import './styles/mixins';" >> "./dist/_mixins.scss"

# Display success message
echo "File ./dist/_mixins.scss successfully created."
echo "Folder $source_folder successfully copied to $destination_folder."