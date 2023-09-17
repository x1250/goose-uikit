const fs = require('fs');
const { exec } = require('child_process');

if (fs.existsSync('.git')) {
  exec('husky install', (error) => {
    if (error) {
      console.error(`Error ejecutando husky install: ${error}`);
    }
  });
}
