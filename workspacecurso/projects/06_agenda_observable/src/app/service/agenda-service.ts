import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  private contactos:Contacto[]=[];
  agregarContacto(contacto:Contacto):Observable<boolean>{
    if(this.contactos.some(c=>c.telefono==contacto.telefono)){
          return of(false);
    }
    this.contactos.push(contacto);
    return of(true);
  }
  obtenerContactos():Observable<Contacto[]>{
    return of(this.contactos);
  }

  //método que devuelve la lista de telefonos
  obtenerTelefonos():Observable<string[]>{
    return of(this.contactos.map(c=>c.telefono));
  }

  //método que elimina el contacto cuyo teléfono se recibe  como parámetro
  eliminarContacto(telefono:string):Observable<void>{
      this.contactos=this.contactos.filter(c=>c.telefono!=telefono);
      return of(void 0);
  }

}
