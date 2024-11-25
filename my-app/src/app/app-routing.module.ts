import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPastasComponent } from './componentes/form-pastas/form-pastas.component';
import { GetItensComponent } from './componentes/get-itens/get-itens.component';
import { GetPastasComponent } from './componentes/get-pastas/get-pastas.component';

const routes: Routes = [
  { path: 'formPasta', component: FormPastasComponent },
  { path: 'getPastas', component: GetPastasComponent },
  { path: 'getItens/:id', component: GetItensComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
