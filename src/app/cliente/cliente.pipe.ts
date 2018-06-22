import { ClienteComponent } from './cliente.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroCliente'
})
export class FiltroCliente implements PipeTransform {

  transform(clientes: ClienteComponent[], texto: string): ClienteComponent[] {
    
    return clientes.filter(cliente => cliente.nome.toLowerCase().includes(texto.toLowerCase()));
  }

}
