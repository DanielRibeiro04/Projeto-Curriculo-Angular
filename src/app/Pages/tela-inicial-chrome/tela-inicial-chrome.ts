import { Component } from '@angular/core';
import { FooterComponent } from '../../Componentes/footer/footer';
import { Header } from '../../Componentes/header/header';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopupErro } from '../../popup-erro/popup-erro';

@Component({
  selector: 'app-tela-inicial-chrome',
  imports: [FooterComponent, Header, FormsModule],
  templateUrl: './tela-inicial-chrome.html',
  styleUrl: './tela-inicial-chrome.css',
})
export class TelaInicialChrome {
  constructor(
    private dialog: MatDialog,
    private router: Router
  ) {}

  valorDigitado: string = '';
  mensagem: string = '';

  enviar() {
    if (this.valorDigitado.toLowerCase() != 'curriculo daniel') {

      this.dialog.open(PopupErro);

    } else {

      console.log(this.valorDigitado);
      this.router.navigate(['/home']);
  }
}
}
