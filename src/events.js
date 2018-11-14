var listeners = {};

function subscribe(event, callback) {          // Subscribe: adds events as keys and arrays filled with callbacks as properties
    console.log('Subscribing to' , event);
    var queue = listeners[event] || []; 
    queue.push(callback);
    listeners[event] = queue;
}

function publish(event, payload) {            // publish: finds event and execute each callback in the array       
    console.log('Publishing ' + event, payload);
    var queue = listeners[event];                   
    if (queue) {
        queue.forEach(callback => callback(payload)); 
    }
}

function unsubscribe(event, callback) {       // unsubscribe: find event and loop through array until callback has been found and remove
    console.log('Unsubscribing to', event);
    var queue = listeners[event];
    for (var i = 0; i < queue.length; i++) {
        if (queue[i] === callback) {
            queue.splice(0, 1);
            break;
        }
    }
}

export default {
    publish,
    subscribe,
    unsubscribe
}