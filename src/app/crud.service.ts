import { tap, catchError } from 'rxjs/operators';
import { MensagemService } from './mensagem/mensagem.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Entidade } from './entidade';
import { Observable, of } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class CrudService {
	
	private url = 'localhost:3000/users';


  constructor(private http: HttpClient, private mensagemService: MensagemService) {}
   
  getTodos(): Observable<any[]>{   
    		return this.http.get<Entidade[]>(this.url)
					.pipe(
						tap(dados => dados),
						catchError(this.handleError('buscar', []))								
				);   
	}
	

	salvar(objeto: Entidade): Observable<Entidade>{
		return this.http.post(this.url, objeto, httpOptions)
		.pipe(
			tap((objeto: Entidade) => this.log("Salvo com sucesso")),
			catchError(this.handleError<Entidade>('salvar '))
		);

	}

	deletar (objeto: Entidade): Observable<Entidade> {
		console.log(objeto);
		const id = objeto.id;
		const urlEdit = `${this.url}/${id}`;
	 
		return this.http.delete<Entidade>(urlEdit, httpOptions).pipe(
		  tap(_ => this.log(`deletado com sucesso`)),
		  catchError(this.handleError<Entidade>('deletar'))
		);
	  }
	 
	 
	  editar (objeto: Entidade): Observable<any> {
			return this.http.put(this.url, objeto, httpOptions).pipe(
				tap(_ => this.log('Atualizado com sucesso')),
				catchError(this.handleError<any>('editar'))
			);
	  }

		


	 
	private handleError<T>(operacao='operacao', resultado?:T){
		return(erro: any): Observable<T> =>{
				console.error(erro);
				this.log('Falha ao '+operacao);

				return of(resultado as T);

		};

	}

	private log(mensagem: string){
			this.mensagemService.novaMensagem(mensagem);
	}


}
