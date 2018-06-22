import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpresaComponent } from './empresa.component';
import { EmpresaService } from './empresa.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EmpresaComponent],
  providers: [EmpresaService]
})
export class EmpresaModule { }
