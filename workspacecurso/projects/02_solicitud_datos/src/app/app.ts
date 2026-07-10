
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  nombre:string;
  edad:number;
  mensaje:string;
  mostrarMensaje():void{
     this.mensaje=`Te llamas ${this.nombre} y tienes ${this.edad} años`;
  }
}
