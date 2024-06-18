// this way you can access direct method of modules
const { readFileSync, writeFileSync } = require('fs');

// To read file
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second);

// To write file, it will also override the exsiting file if exists or create a new one.
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}`
);

// To append instead of overriding
writeFileSync(
    './content/result-sync.txt',
     `Here is the result: ${first}, ${second}`,
     { flag: 'a'}
);