import { catchError, tap, map } from 'rxjs/operators';
import { MensagemService } from './../mensagem/mensagem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EmpresaComponent } from './empresa.component';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private url: string = "https://www.receitaws.com.br/v1/cnpj/";
  private cnpj: string;

  constructor(private http: HttpClient,
    private mensagemService: MensagemService) { }

  setCnpj(cnpj: string):void{
    this.cnpj = cnpj;
  }

  getCnpj(): any{
    
    return this.http.get(this.url+this.cnpj)
        .pipe(
          map(cnpj => cnpj),
          catchError(this.handleError('buscar o CNPJ', []))								
      );   

  }

  private handleError<T>(operacao='operacao', resultado?:T){
		return(erro: any): Observable<T> =>{
				console.error(erro);
				this.log('Falha ao '+operacao+': '+resultado);

				return of(resultado as T);

		};

	}

	private log(mensagem: string){
			this.mensagemService.novaMensagem(mensagem);
	}



}
