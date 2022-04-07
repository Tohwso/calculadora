import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  calcular(numero1:number,numero2:number,operacao:string):number{
    if(operacao == "+"){
      return numero1 + numero2;
    }
    if(operacao == "-"){
      return numero1 - numero2;
    }
    if(operacao == "/"){
      return numero1 / numero2;
    }
    if(operacao == "*"){
      return numero1 * numero2;
    }
    return 0;
  }
}

