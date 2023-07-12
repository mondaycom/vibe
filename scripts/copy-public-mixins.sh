#!/bin/bash

# Define the source and destination paths
source_folder="./src/mixins"
source_index="./src/_mixins.scss"
destination_folder="./dist/mixins"
destination_index="./dist/_mixins.scss"
# Copy the mixins folder and its contents
cp -r "$source_folder" "$destination_folder"

# Copy the mixins index as partial
cp "$source_index" "$destination_index"

# Display success message
echo "Folder $source_folder successfully copied to $destination_folder."
