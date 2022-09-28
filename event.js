
var events = require('events');
var eventEmitter = new events.EventEmitter();
 
// Create an event handler:
var myEventHandler = function () {
   
    console.log('Welcome to GeeksforGeeks');
}
 
// Assign the event handler to an event:
eventEmitter.on('geeks', myEventHandler);
 
// Fire the 'geeks' event:
eventEmitter.emit('geeks');

// myEventHandler()

function printHello() {
    console.log( "Hello, World!");

    console.log( "Karthikeya");
 }
 
 // Now call above function after 2 seconds
 var timeoutObj = setTimeout(printHello, 2000); //setTimeout method