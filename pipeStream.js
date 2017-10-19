var fs = require('fs');

var readStream = fs.createReadStream('textFile.txt');
var writeStream = fs.createWriteStream('output.txt');
readStream.pipe(writeStream);

console.log('Program ended');