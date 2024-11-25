import { Pipe, PipeTransform } from '@angular/core';
import { Pasta } from '../classes/pasta';

@Pipe({
  name: 'pesquisaPastas'
})
export class PesquisaPastasPipe implements PipeTransform {

  transform(pastas: Pasta[], pastaPesquisada: string): Pasta[] {
    if(pastaPesquisada.length < 3){
      return pastas
    }

    return pastas.filter((pasta: Pasta) => {
      return pasta.nome?.toLocaleLowerCase().includes(pastaPesquisada.toLocaleLowerCase())
    })
  }

}
