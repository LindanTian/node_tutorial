let fs = require('fs');
let data = fs.readFileSync('textFile.txt');
console.log(data.toString());
console.log("program ended");