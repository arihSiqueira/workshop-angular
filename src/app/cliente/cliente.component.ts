import { Component, OnInit, Input } from '@angular/core';
import { Entidade } from '../entidade';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit, Entidade {

	id: number;
	@Input() nome: string = '';
	@Input() email: string = '';
	@Input() telefone: string = '';
	@Input() nascimento: Date = new Date();

	constructor() { }

	ngOnInit() {
	}  
  	
 
}
