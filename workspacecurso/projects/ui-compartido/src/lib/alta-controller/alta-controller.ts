import { Component, signal } from '@angular/core';

import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-alta-controller',
  imports: [ReactiveFormsModule],
  templateUrl: './alta-controller.html',
  styleUrl: './alta-controller.css',
})
export class AltaController {
  error:boolean=false;
  altaForm = new FormGroup({
    url: new FormControl('', [Validators.required]),
    tematica: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  constructor(){
    //permite que el control descripción se rellene automáticamente con el contenido de la url
    this.altaForm.get("url").valueChanges
    .subscribe(v=>this.altaForm.get("descripcion").setValue(v));
    //para temática de libros la descripción no puede superar los 20 caracteres
    this.altaForm.get("tematica").valueChanges
    .subscribe(v=>{

      if(v=="libros"){
        this.altaForm.get("descripcion").addValidators(Validators.maxLength(20));
      }else{
        this.altaForm.get("descripcion").clearValidators();
        this.altaForm.get("descripcion").addValidators([Validators.required, Validators.minLength(10)]);
      }
      this.altaForm.get("descripcion").updateValueAndValidity();
    })

  }

  guardar(){
    if(this.altaForm.invalid){
      this.error=true;
      alert("El formaulario no es válido")
      return;
    }

  }
}
