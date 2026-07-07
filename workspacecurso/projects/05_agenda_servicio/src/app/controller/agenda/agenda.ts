import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';
import { AgendaService } from '../../service/agenda-service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule],
  templateUrl: './agenda.html',
  styleUrl: './agenda.css',
})
export class Agenda {
  contactos:Contacto[];
  contacto:Contacto=new Contacto("","",0);
  show:boolean=false;
  constructor(private agendaService:AgendaService){

  }
  agregarContacto():void{
    if(!this.agendaService.agregarContacto(this.contacto)){
      alert("Contacto repetido!!!");
      return;
    }
    this.contacto=new Contacto();
  }
  mostrarTodos():void{
    this.show=true;
    this.contactos=this.agendaService.obtenerContactos();
  }

  eliminarContacto(telefono:string):void{
    this.agendaService.eliminarContacto(telefono);
    this.mostrarTodos(); //actualiza lista de contactos
  }
}
