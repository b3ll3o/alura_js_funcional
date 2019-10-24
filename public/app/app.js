import { log } from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js';



document
  .querySelector('#myButton')
    .onclick = () => service
      .sumItens('2222')
      .then(console.log)
      .catch(console.log)
