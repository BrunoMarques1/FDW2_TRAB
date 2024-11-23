import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormPastasComponent } from './componentes/form-pastas/form-pastas.component';
import { GetPastasItensComponent } from './componentes/get-pastas-itens/get-pastas-itens.component';
import { GetItensComponent } from './componentes/get-itens/get-itens.component';

@NgModule({
  declarations: [
    AppComponent,
    FormPastasComponent,
    GetPastasItensComponent,
    GetItensComponent,
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
