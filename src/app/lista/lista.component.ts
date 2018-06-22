import { ClienteComponent } from './../cliente/cliente.component';
// import { ClienteService } from './../cliente/cliente.service';
import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 clientes: ClienteComponent[] = [];
 clienteSelecionado: ClienteComponent;
  constructor(private service: CrudService) { }

  ngOnInit() {
    this.listarTodos(); 

  }


  listarTodos(): void{
      
   this.service.getTodos()
    .subscribe(clientes => this.clientes = clientes);
  }

  selecionar(cliente: ClienteComponent):void{
      this.clienteSelecionado = cliente;
      console.log(this.clienteSelecionado);
      console.log(cliente);
  }

  deletar(cliente: ClienteComponent): void{
    this.clientes = this.clientes.filter(c => c !== cliente);
    this.service.deletar(cliente).subscribe();
  }

  editar(cliente: ClienteComponent): void{
    
    this.service.editar(cliente).subscribe();
  }

}
