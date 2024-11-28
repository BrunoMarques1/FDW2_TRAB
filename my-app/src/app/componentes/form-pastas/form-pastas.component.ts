import { Component, input } from '@angular/core'
import { ApiServiceService } from '../../services/api-service.service'
import { Pasta } from '../../classes/pasta'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-form-pastas',
  templateUrl: './form-pastas.component.html',
  styleUrl: './form-pastas.component.css'
})
export class FormPastasComponent {
  pasta = new Pasta()
  id?: number

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router,
    private route: ActivatedRoute
    ){
      this.id = this.route.snapshot.params['id'];
      if(this.id){
        this.apiServiceService.getPastaByID(this.id).subscribe(
          (pasta) => {
            this.pasta = pasta
          }
        )
      }
    }

  salvar() {
    if(this.id){
      this.apiServiceService.editarPasta(this.id,this.pasta).subscribe(
        (i)=>{
          console.log(i)
          alert('Pasta modificada com sucesso')
        }
      )
    }else{
      this.apiServiceService.postPasta(this.pasta).subscribe(
        (novaPasta) => {
          alert('pasta inserido com sucesso!')
          this.pasta = new Pasta()
        }
      )
    }



    
  }
}

  





