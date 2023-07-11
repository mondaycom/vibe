#!/bin/bash
if [ ! -d "src/components/Icon/Icons/components" ]; then
  echo "React icons directory doesn't exists - building react icons..."
  npm run build:react-icons
fi
