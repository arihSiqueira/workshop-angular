import { MensagemService } from './mensagem.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  constructor(public mensagemService: MensagemService){}

  ngOnInit() {
  }

}



// versão do vs code 1.24.1