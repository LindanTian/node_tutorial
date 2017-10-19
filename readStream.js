var fs = require('fs');
var data = '';

// readStream is an EventEmitter instance
var readStream = fs.createReadStream('textFile.txt');
// this is like fs.readFile, not synchronized (textFile1.txt)

readStream.setEncoding('UTF-8');

readStream.on('data', function(chunk) {
	data += chunk;
})
// end event only for read
readStream.on('end', function() {
	console.log(data);
});

readStream.on('error', function(err) {
	console.log("haha " + err.stack);
});

console.log("Program ended");
// Not synchronized!