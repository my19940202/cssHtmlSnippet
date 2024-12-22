const {execSync} = require('child_process');
const filename = execSync(`sleep 10;ls ~/Downloads`, {encoding: 'utf-8'});
console.log('filename', filename);

