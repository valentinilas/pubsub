let subscribers = {};
export const pubsub = {
    publish(event, data) {
        if (!subscribers[event]) return;
        subscribers[event].forEach(subscriberCallback =>
            subscriberCallback(data));
    },
    subscribe(event, callback) {
        let index;
        if (!subscribers[event]) {
            subscribers[event] = [];
        }
        // push returns the new length of the array
        index = subscribers[event].push(callback) - 1;
        console.log(subscribers);
        return {
            unsubscribe() {
                subscribers[event].splice(index, 1);
            }
        };
    }

};