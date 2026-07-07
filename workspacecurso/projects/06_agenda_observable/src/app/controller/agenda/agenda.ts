import { Component, signal } from '@angular/core';
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
  contactos=signal<Contacto[]>([]);
  contacto:Contacto=new Contacto("","",0);
  show=signal<boolean>(false);
  constructor(private agendaService:AgendaService){

  }
  agregarContacto():void{
    this.agendaService.agregarContacto(this.contacto)
      .subscribe(data=>{
        if(!data){
          alert("Contacto repetido!!!");
        }else{
          this.contacto=new Contacto();
        }
      })




  }
  mostrarTodos():void{
    this.show.set(true);
    this.agendaService.obtenerContactos()
      .subscribe(data=>this.contactos.set(data));
  }

  eliminarContacto(telefono:string):void{
    this.agendaService.eliminarContacto(telefono)
      .subscribe(data=>this.mostrarTodos());

  }
}
