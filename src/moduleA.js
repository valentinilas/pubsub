// Module A is a publisher

import { pubsub } from './pubsub';

export const moduleA = {
    publishEvent() {
        const data = {
            msg: "TOP SECRET DATA"
        };

        pubsub.publish("anEvent", data);
    }
};