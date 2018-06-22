import { MensagemService } from './../mensagem/mensagem.service';
import { Component, OnInit } from '@angular/core';
import { EmpresaService } from '../empresa/empresa.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaComponent } from '../empresa/empresa.component';

@Component({
  selector: 'app-cadastro-empresa',
  templateUrl: './cadastro-empresa.component.html',
  styleUrls: ['./cadastro-empresa.component.css'],
  providers:[EmpresaService]
})
export class CadastroEmpresaComponent implements OnInit {

  public empresa: EmpresaComponent = new EmpresaComponent();
  formulario: FormGroup;
  empresaComponente: EmpresaComponent = new EmpresaComponent();

  constructor(private service: EmpresaService,
              private mensagens: MensagemService,
              formBuilder: FormBuilder) {

                this.formulario = formBuilder.group({
                  nome: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
                            
          
                });
               }

  ngOnInit() {
  }

  buscaCnpj(cnpj: string){
    this.service.setCnpj(cnpj);
    this.empresa = this.service.getCnpj().subscribe(
     empresa =>{this.empresa = empresa},
      error => {console.log(error);
      }
     );

  }

  cadastrar(event) {
		event.preventDefault();
        console.log(this.empresa);

        // this.service.salvarClientes(this.cliente)
        // .subscribe(cliente => this.cliente = new ClienteComponent());

        
  }

}


