import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):boolean{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
          return false;
    }
    this.contactos.push(contacto);
    return true;
  }
  obtenerContactos():Contacto[]{
    return this.contactos;
  }

  //método que devuelve la lista de telefonos
  obtenerTelefonos():string[]{
    return this.contactos.map(c=>c.telefono);
  }

  //método que elimina el contacto cuyo teléfono se recibe  como parámetro
  eliminarContacto(telefono:string):void{
      this.contactos=this.contactos.filter(c=>c.telefono!=telefono);
  }

}
