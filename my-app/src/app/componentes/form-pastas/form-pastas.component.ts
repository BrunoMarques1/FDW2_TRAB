import { Component } from '@angular/core'
import { ApiServiceService } from '../../services/api-service.service'
import { Pasta } from '../../classes/pasta'

@Component({
  selector: 'app-form-pastas',
  templateUrl: './form-pastas.component.html',
  styleUrl: './form-pastas.component.css'
})
export class FormPastasComponent {
  pastas : Pasta[] = []
  pasta = new Pasta()

  constructor(private apiServiceService:ApiServiceService){}

  inserir() {
    this.apiServiceService.inserir(this.pasta).subscribe(
      (novaPasta) => {
        alert('pasta inserido com sucesso!')
        this.pasta = new Pasta()
      }
    )
  }

}



