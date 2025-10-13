import { Component } from '@angular/core';
import { FooterComponent } from '../../Componentes/footer/footer';
import { Header } from '../../Componentes/header/header';

@Component({
  selector: 'app-tela-inicial-chrome',
  imports: [FooterComponent, Header],
  templateUrl: './tela-inicial-chrome.html',
  styleUrl: './tela-inicial-chrome.css'
})
export class TelaInicialChrome {

}
