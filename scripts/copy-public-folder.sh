#!/bin/bash

# We can't export sass helpers (like mixins or functions) by using our regular sass build mechanism (compile-styles script), because sass
# compilation converts .scss files to pure css files (which does not support any sass abilities.)
# This is why we must export the actual scss files (without a compilation).
# This script's purpose is to export a folder containing public sass helpers by copying them to the dist folder.

# Define the source and destination paths
source_folder="./src/$1"
source_index="./src/_$1.scss"
destination_folder="./dist/$1"
destination_index="./dist/_$1.scss"
# Copy the public folder and its contents
cp -r "$source_folder" "$destination_folder"

# Copy the public folder index file as partial
cp "$source_index" "$destination_index"

# Display success message
echo "Folder $source_folder successfully copied to $destination_folder."
