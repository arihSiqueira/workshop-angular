import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
// import { ClienteService } from './cliente.service';
import { FiltroCliente } from './cliente.pipe';
import { CrudService } from '../crud.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ClienteComponent, FiltroCliente],
  providers: [CrudService],
  exports: [FiltroCliente]
})
export class ClienteModule { }
