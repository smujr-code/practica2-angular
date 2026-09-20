import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  contador: number = 0;

  incrementar() {
    this.contador++;
  }

  disminuir() {
    this.contador--;
  }
}