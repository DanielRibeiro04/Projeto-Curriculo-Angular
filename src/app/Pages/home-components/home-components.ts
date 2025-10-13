import { Component } from '@angular/core';
import { FooterComponent } from '../../Componentes/footer/footer';
import { Header } from '../../Componentes/header/header';

@Component({
  selector: 'app-home-components',
  standalone: true,
  imports: [FooterComponent, Header],
  templateUrl: './home-components.html',
  styleUrl: './home-components.css'

})
export class HomeComponents {}
