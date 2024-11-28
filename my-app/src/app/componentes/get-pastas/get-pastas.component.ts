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
    this.apiServiceService.getPastas().subscribe(
      (i) => {
        this.pastas = i
      }
    )
  }

  editarPasta(id?:number){
    this.router.navigate([`/formPasta/${id}`])    
  }

  cadastrarPasta(){
    this.router.navigate([`/formPasta/`])    
  }

  abrirPasta(id?:number){
    this.router.navigate([`/getItens/${id}`])
  }

  deletarPasta(id?:number){
    this.apiServiceService.deletarPasta(id).subscribe(
      (i) => {
        alert("Pasta deletada!")
        this.listar()
      }
    )
  }

}
