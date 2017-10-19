//In Node Application, any async function accepts a callback as the last parameter 
//and a callback function accepts an error as the first parameter
let fs = require("fs");
// the callback function (err, data)=>{return ...}
fs.readFile('textFile.txt', function(err, data) {
	if(err) {
		return console.error(err);
	}
	return console.log(data.toString());
});
console.log("Program ended");