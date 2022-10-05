// import { increase, getCount } from './counter.js';

import * as counter from './counter.js';
counter.increase();
counter.increase();
const count = counter.getCount();
console.log(count); // 2
