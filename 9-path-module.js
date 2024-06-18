// how path is seperated
const path = require('path');
console.log(path.sep);

// to join path 
const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

// to get the base name of a file path
const base = path.basename(filePath);
console.log(base);

// provide absolute path
const absolute = path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);