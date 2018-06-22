// import { ClienteService } from './../cliente/cliente.service';
import { ClienteComponent } from './../cliente/cliente.component';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],  
})
export class CadastroComponent implements OnInit {

  formulario: FormGroup;
  cliente: ClienteComponent = new ClienteComponent();
  
 

  constructor( 
              formBuilder: FormBuilder,
              private service: CrudService
             ) {

         

      this.formulario = formBuilder.group({
        nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        email: ['', Validators.compose([Validators.email, Validators.required])],
        telefone: ['', Validators.required],
        nascimento: ['', Validators.required]

      });



 }

  ngOnInit() {
   
  }

  cadastrar(event) {
		event.preventDefault();
        console.log(this.cliente);

        this.service.salvar(this.cliente)
        .subscribe(cliente => this.cliente = new ClienteComponent());

        
  }

  
}
