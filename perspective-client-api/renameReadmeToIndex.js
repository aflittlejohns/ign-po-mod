#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Base directory
const baseDir = path.join(__dirname, 'docs');

// Function to recursively rename README.md to index.md
function renameReadmeToIndex(dir) {
  // Read all files and directories in the current directory
  fs.readdir(dir, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dir}:`, err);
      return;
    }

    files.forEach((file) => {
      const fullPath = path.join(dir, file.name);

      if (file.isDirectory()) {
        // Recursively process subdirectories
        renameReadmeToIndex(fullPath);
      } else if (file.isFile() && file.name === 'README.md') {
        // Rename README.md to index.md
        const newFilePath = path.join(dir, 'index.md');
        fs.rename(fullPath, newFilePath, (err) => {
          if (err) {
            console.error(`Error renaming file ${fullPath}:`, err);
          } else {
            console.log(`Renamed ${fullPath} to ${newFilePath}`);
          }
        });
      }
    });
  });
}

// Start the renaming process
renameReadmeToIndex(baseDir);