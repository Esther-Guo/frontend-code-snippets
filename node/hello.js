let { readFileSync }  = require('fs');

console.log(readFileSync('./main.js', 'utf8'));

// writeFile('aha.txt', 'ahahahaha', err => {
//     if (err) console.log(`Failed to write file: ${err}`);
//     else console.log('text written');
// })
