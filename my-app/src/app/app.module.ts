import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormPastasComponent } from './componentes/form-pastas/form-pastas.component';
import { GetItensComponent } from './componentes/get-itens/get-itens.component';
import { GetPastasComponent } from './componentes/get-pastas/get-pastas.component';
import { PesquisaPastasPipe } from './pipes/pesquisa-pastas.pipe';
import { FormItensComponent } from './componentes/form-itens/form-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPastasComponent,
    GetItensComponent,
    GetPastasComponent,
    PesquisaPastasPipe,
    FormItensComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
