import { Component } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { Item } from '../../classes/item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-itens',
  templateUrl: './get-itens.component.html',
  styleUrls: ['./get-itens.component.css'],
})
export class GetItensComponent {
  itens: Item[] = [];
  idPasta?: number;
  itemPesquisado = '';
  expandedIndex: number | null = null;

  constructor(
    private apiServiceService: ApiServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.idPasta = this.route.snapshot.params['id'];
    this.listarItens();
  }

  listarItens() {
    if (this.idPasta) {
      this.apiServiceService.getItensByPastaID(this.idPasta).subscribe((i) => {
        this.itens = i;
      });
    } else {
      this.apiServiceService.getItens().subscribe((i) => {
        this.itens = i;
      });
    }
  }

  toggleExpand(index: number) {
    this.expandedIndex = this.expandedIndex === index ? null : index;
  }

  cadastrarItem(){
    this.router.navigate([`/formItem/post/${this.idPasta}`])
  }
  editarItem(idItem?:number){
    this.router.navigate([`/formItem/put/${idItem}`])
  }
  deletarItem(id?:number){
    this.apiServiceService.deletarItem(id).subscribe(
      (i) => {
        alert("Item deletado!")
        this.listarItens()
      }
    )
  }
}
