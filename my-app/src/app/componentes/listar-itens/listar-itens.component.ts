import { Component } from '@angular/core'
import { ApiServiceService } from '../../services/api-service.service'
import { Item } from '../../classes/item'

@Component({
  selector: 'app-listar-itens',
  templateUrl: './listar-itens.component.html',
  styleUrl: './listar-itens.component.css'
})
export class ListarItensComponent {
  itens : Item[] = []
  item = new Item()

  constructor(private apiServiceService:ApiServiceService){
    this.listar()
  }
  listar(){
    this.apiServiceService.listar().subscribe(
      (i) =>{
        this.itens = i
        console.log(this.itens)
      }
    )
  }

  inserir() {
    this.apiServiceService.inserir(this.item).subscribe(
      (novoItem) => {
        alert('Item inserido com sucesso!')
        this.listar()
        this.item = new Item()
      }
    )
  }

  deletar(id?: number) {
    this.apiServiceService.deletar(id).subscribe(
      () => {
        alert('Item deletado com sucesso!');
        this.itens = this.itens.filter(item => item.id !== id); // Remove o item da lista local
      }
    );
  }
  

}
