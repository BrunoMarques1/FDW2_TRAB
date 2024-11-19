import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Item } from '../../classes/item';

@Component({
  selector: 'app-listar-itens',
  templateUrl: './listar-itens.component.html',
  styleUrl: './listar-itens.component.css'
})
export class ListarItensComponent {
  itens : Item[] = []
  teste = 'asd'

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
}
