// Importing methods from modules
const { readFile, writeFile} = require('fs');

// To read file in async
readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

readFile('./content/second.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// To write file in async
writeFile('./content/result-async.txt', `Hello Node.js`, 'utf8', (err) => {
    if (err) throw err;
    console.log("File has been saved.");
});
console.log('Fast as F#ck boy.');