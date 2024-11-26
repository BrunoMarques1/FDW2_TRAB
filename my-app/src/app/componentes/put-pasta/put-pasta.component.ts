import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasta } from '../../classes/pasta';

@Component({
  selector: 'app-put-pasta',
  templateUrl: './put-pasta.component.html',
  styleUrl: './put-pasta.component.css'
})
export class PutPastaComponent {
  id?: number
  pasta = new Pasta()

  constructor(
    private apiServiceService:ApiServiceService,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.id = +this.route.snapshot.params['id'];
    this.pegarPasta(this.id)
  }

  pegarPasta(id?:number){
    this.apiServiceService.listarPastas().subscribe(
      (i) => {
        i.forEach(element => {
          if(element.id === id){
            this.pasta = element
          }
        });
      }
    )
  }

  editarPasta(){
    this.apiServiceService.editarPasta(this.id,this.pasta).subscribe(
      (i)=>{
        console.log(i)
        alert('Pasta modificada com sucesso')
      }
    )
  }

}
