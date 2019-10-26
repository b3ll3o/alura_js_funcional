import { log, timeoutPromie, retry } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, compose } from './utils/operators.js';
import { EventEmitter } from './utils/event-emitter.js';

const operations = compose(
  partialize(debounceTime, 500),
  partialize(takeUntil, 3)
);

const action = operations(() =>
  retry(3, 3000, () => 
    timeoutPromie(200, service.sumItens('2143')))
      .then(total => EventEmitter.emit('ItensTotalizados', total))
      .catch(console.log));

document
  .querySelector('#myButton')
    .onclick = action;
