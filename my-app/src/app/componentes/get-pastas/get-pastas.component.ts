import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Pasta } from '../../classes/pasta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-pastas',
  templateUrl: './get-pastas.component.html',
  styleUrl: './get-pastas.component.css'
})
export class GetPastasComponent {
  pastas: Pasta[] = []
  pastaPesquisada = ""


  constructor(
    private apiServiceService:ApiServiceService,
    private router: Router,

  ) {
    this.listar()
  }

  listar(){
    this.apiServiceService.listarPastas().subscribe(
      (i) => {
        this.pastas = i
      }
    )
  }

  abrirPasta(id?:number){
    this.router.navigate([`/getItens/${id}`])
  }

}
