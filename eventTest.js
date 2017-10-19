let events = require('events');

let eventEmitter = new events.EventEmitter();

// check out the function name way, something new to me 
let connectHandler = function connected() {
	console.log('connection successfully');
	eventEmitter.emit('data_received');
};

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function() {
	console.log('data received successfully')
})

eventEmitter.emit('connection');
// Note, this way the eventEmitter is running in synch way
//looks like no differnce with the front end DOM node addEventListener 
console.log('Program ended')
