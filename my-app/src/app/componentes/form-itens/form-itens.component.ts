import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../classes/item';

@Component({
  selector: 'app-form-itens',
  templateUrl: './form-itens.component.html',
  styleUrl: './form-itens.component.css'
})
export class FormItensComponent {
  item = new Item()
  id?: number
  acao?: string

  constructor(
    private apiServiceService:ApiServiceService,
    private router:Router,
    private route: ActivatedRoute
    ){
      this.id = this.route.snapshot.params['id'];
      this.acao = this.route.snapshot.params['acao'];
      if(this.acao === "put"){
        this.apiServiceService.getItemByID(this.id).subscribe(
          (item) => {
            this.item = item
          }
        )
      }
    }

  salvar() {
    if(this.acao === "put"){
      this.apiServiceService.editarItem(this.id,this.item).subscribe(
        (i)=>{
          console.log(i)
          alert('Item modificado com sucesso!')
        }
      )
    }else{
      console.log(this.id,this.acao)
      this.item.pasta_id = this.id
      this.apiServiceService.postItem(this.item).subscribe(
        (novoItem) => {
          alert('Item inserido com sucesso!')
          this.item = new Item()
        }
      )
    }



    
  }
}
