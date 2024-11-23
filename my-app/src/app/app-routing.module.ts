import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPastasComponent } from './componentes/form-pastas/form-pastas.component';
import { GetPastasItensComponent } from './componentes/get-pastas-itens/get-pastas-itens.component';
import { GetItensComponent } from './componentes/get-itens/get-itens.component';

const routes: Routes = [
  { path: 'formPasta', component: FormPastasComponent },
  { path: 'getPastas', component: GetPastasItensComponent },
  { path: 'getItens', component: GetItensComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
