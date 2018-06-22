import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {
	
	mensagens: string[] = [];
  
    	
  	novaMensagem(mensagem: string){
  		this.mensagens.push(mensagem);
  	}
  	limpar(){
  	  	this.mensagens = [];	  	
  	}
  
	testaMensagem(){
		this.novaMensagem("está funcionando");
	}  
  
  
}
