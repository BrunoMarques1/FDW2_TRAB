import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../classes/item';

@Pipe({
  name: 'pesquisaItens'
})
export class PesquisaItensPipe implements PipeTransform {

  transform(itens: Item[], itemPesquisado: string): Item[] {
    if(itemPesquisado.length < 3){
      return itens
    }

    return itens.filter((item: Item) => {
      return item.nome?.toLocaleLowerCase().includes(itemPesquisado.toLocaleLowerCase())
    })
  }

}
