import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popup-erro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popup-erro.html',
  styleUrl: './popup-erro.css'
})
export class PopupErro {
  mostrarPopup = true;

  fecharPopup() {
    this.mostrarPopup = false;

  }
}
