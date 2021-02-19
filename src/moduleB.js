// Module B is a subscriber

import { pubsub } from './pubsub';
let subscription;

subscription = pubsub.subscribe("anEvent", data => {
    console.log(`"anEvent", was published with this data: "${data.msg}"`);
    // subscription.unsubscribe();
});