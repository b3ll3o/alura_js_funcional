import { handleStatus } from '../utils/promise-helpers.js';
import { partialize, compose, pipe } from '../utils/operators.js';

const API = 'http://localhost:3000/notas';

const getItensFromNota = notas => notas.$flatMap(nota => nota.itens);
const filterItensByCode = (code, itens) => itens.filter(item => item.codigo == code);
const sumItensValue = itens => itens.reduce((total, item) => total + item.valor, 0);

export const notasService = {
  listAll(){
    return fetch(API)
      .then(handleStatus)
      .catch(err => {
        console.log(err);
        return Promise.reject('não foi possivel obter as notas fiscais');
      });
  },
  sumItens(code){
    const filterItens = partialize(filterItensByCode, code);
    const sumItens = pipe(getItensFromNota, filterItens, sumItensValue);

    return this.listAll()
      .then(sumItens);
  }
}
