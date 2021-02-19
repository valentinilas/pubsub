import { pubsub } from './pubsub';
import { moduleA } from './moduleA';
import { moduleB } from './moduleB';


// We use moduleA's publishEvent() method
moduleA.publishEvent();
moduleA.publishEvent();