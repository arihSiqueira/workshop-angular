import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {ListaComponent} from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CadastroEmpresaComponent } from './cadastro-empresa/cadastro-empresa.component';


	const rotas: Routes = [
	{path:'' , component:ListaComponent},
	{path:'lista' , component:ListaComponent},
	{path:'lista/:id' , component:ListaComponent},
	{path:'cadastro' , component:CadastroComponent},
	{path:'cadastro-empresa' , component:CadastroEmpresaComponent},
	{path:'**' , redirectTo: ''}
	];

	@NgModule({
	  imports: [RouterModule.forRoot(rotas)],
	  exports:[RouterModule]
	})
export class AppRouteModule { }
