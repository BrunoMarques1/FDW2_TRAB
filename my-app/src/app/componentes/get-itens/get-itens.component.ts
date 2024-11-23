import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Item } from '../../classes/item';


@Component({
  selector: 'app-get-itens',
  templateUrl: './get-itens.component.html',
  styleUrl: './get-itens.component.css'
})
export class GetItensComponent {
  itens: Item[] = []

  constructor(private apiServiceService:ApiServiceService){
    this.listarItens()
  }

  listarItens(){
    this.apiServiceService.listarItens(12).subscribe(
      (i) => {
        this.itens = i
      }
    )
  }
}
