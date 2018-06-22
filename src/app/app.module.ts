
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaskModule} from 'ngx-mask';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { AppRouteModule } from './/app-route.module';
import { ListaComponent } from './lista/lista.component';
import { ClienteModule } from './cliente/cliente.module';
import { MensagemModule } from './mensagem/mensagem.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';
import { EmpresaModule } from './empresa/empresa.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    MenuComponent,
    CadastroComponent,
    CadastroEmpresaComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    ClienteModule,
    MensagemModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    // HttpClientInMemoryWebApiModule.forRoot(

    //   InMemoryDataService, { dataEncapsulation: false }
    // ),
    EmpresaModule
   
   
    
  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
