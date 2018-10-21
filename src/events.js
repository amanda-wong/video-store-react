var listeners = {};

function publish(event, payload) {
    console.log('Publishing event', payload);
    var queue = listeners[event];
    if (queue) {
        queue.forEach(callback => callback(payload));
    }
}

function subscribe(event, callback) {
    console.log('Subscribing to event', event);
    var queue = listeners[event] || [];
    queue.push(callback);
    listeners[event] = queue;
}

function unsubscribe(event, callback) {
    console.log('Unsubscribing to event', event);
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