#!/bin/bash
mkdir -p css
npx tailwindcss@3 -i ./src/style.css -o ./css/tailwind.min.css --minify
