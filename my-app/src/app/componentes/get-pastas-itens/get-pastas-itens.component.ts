import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Pasta } from '../../classes/pasta';


@Component({
  selector: 'app-get-pastas-itens',
  templateUrl: './get-pastas-itens.component.html',
  styleUrl: './get-pastas-itens.component.css'
})
export class GetPastasItensComponent {
  pastas: Pasta[] = []

  constructor(private apiServiceService:ApiServiceService){
    this.listar()
  }

  listar(){
    this.apiServiceService.listarPastas().subscribe(
      (i) => {
        this.pastas = i
      }
    )
  }

}
