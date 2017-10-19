var fs = require('fs');
var data = 'test writing to the stream';

var writeStream = fs.createWriteStream('output.txt');

writeStream.write(data, 'UTF-8');

writeStream.end();

writeStream.on('finish', function() {
	console.log('write completed!!');
});

writeStream.on('error', function(err) {
	console.log(err.stack);
})

console.log('program ended');

// this write is rewrite not concat inside the output.txt