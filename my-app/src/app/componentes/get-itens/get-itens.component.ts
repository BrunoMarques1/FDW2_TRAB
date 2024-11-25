import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Item } from '../../classes/item';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-get-itens',
  templateUrl: './get-itens.component.html',
  styleUrl: './get-itens.component.css'
})
export class GetItensComponent {
  itens: Item[] = []
  idPasta?:number

  constructor(
    private apiServiceService:ApiServiceService,
    private route: ActivatedRoute,
  ) {
    this.idPasta = this.route.snapshot.params['id']
    this.listarItens(this.idPasta)
  }

  listarItens(id?:number){
    this.apiServiceService.listarItens(id).subscribe(
      (i) => {
        this.itens = i
      }
    )
  }
}
