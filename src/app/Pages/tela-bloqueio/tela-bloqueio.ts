import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-bloqueio',
  imports: [RouterLink, FormsModule],
  templateUrl: './tela-bloqueio.html',
  styleUrl: './tela-bloqueio.css'
})
export class TelaBloqueio {

  valorDigitado: string = '';
  mensagem: string = '';
  enviar() {
    console.log(this.valorDigitado);
  }
}
