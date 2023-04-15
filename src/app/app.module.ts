import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormComponent } from './components/form/form.component';
import { ComofuncionaComponent } from './components/comofunciona/comofunciona.component';
import { QuersaberquantoComponent } from './components/quersaberquanto/quersaberquanto.component';
import { ComofazerComponent } from './components/comofazer/comofazer.component';
import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    FormComponent,
    ComofuncionaComponent,
    QuersaberquantoComponent,
    ComofazerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
