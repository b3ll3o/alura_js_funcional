import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, partialize, compose } from './utils/operators.js';

const operations = compose(
  partialize(debounceTime, 500),
  partialize(takeUntil, 3)
);

const action = operations(() =>
  service
    .sumItens('2143')
    .then(console.log)
    .catch(console.log)
);

document
  .querySelector('#myButton')
    .onclick = action;
