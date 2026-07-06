import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Operacion } from '../../model/Operacion';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  num1:number;
  num2:number;
  resultado:string;
  listaresultados:Operacion[]=[];
  show:boolean=false;
  sumar():void{
    this.resultado=`La suma es ${this.num1+this.num2}`;
    this.listaresultados.push(new Operacion(`${this.num1}+${this.num2}`,this.num1+this.num2));
  }
  multiplicar():void{
    this.resultado=`La multiplicación es ${this.num1*this.num2}`;
    this.listaresultados.push(new Operacion(`${this.num1}*${this.num2}`,this.num1*this.num2));
  }
  historico():void{
    this.show=true;
  }
}
