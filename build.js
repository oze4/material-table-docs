'use strict'

const dotenv = require('dotenv');
const path = require('path');
const { exec } = require('child_process');

dotenv.config({ path: path.resolve(__dirname, './.env') });

exec('yarn docusaurus:deploy', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error building: ${error}`);
    return;
  }
  console.log(`Output: ${stdout}`);
  console.error(`Errors: ${stderr}`);
});


/*
terminal.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});

terminal.on('exit', code => {
    console.log(`child process exited with code: ${code}`);
});

setTimeout(() => {
    console.log('Sending stdin to terminal');

    terminal.stdin.write('echo "Hello $USER. Your machine runs since:"\n');
    terminal.stdin.write('uptime\n');

    console.log('Ending terminal session');

    terminal.stdin.end();
}, 1000);
*/

