import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RelogioFooter } from './relogio-footer/relogio-footer';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RelogioFooter, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {}
