import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service'

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
   private operacao:string = null;
   private numero1:string = null;
   private numero2:string = null;
   private resultado:number = null;

  constructor(private calculadoraService:CalculadoraService) {
   }

  ngOnInit(): void {
    
  }

  public definirResultado():void{
    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1),parseFloat(this.numero2),this.operacao);   
    this.numero1 = this.resultado.toString();
    this.numero2 = null;
    this.operacao = null;
    this.resultado = null;

  }

  public definirOperacao(operacao:string):void{   
    if((this.operacao == null || this.operacao != operacao) && this.numero2 == null ){
      this.operacao = operacao;
      return;
    }

    if(this.numero2 != null){
      this.definirResultado();
      this.operacao = operacao;
    }

  }

  public adicionarNumero(numero:string):void{
    if(this.operacao == null){      
      this.numero1 = this.concatenarNumero(this.numero1,numero);
    }else{
      this.numero2 = this.concatenarNumero(this.numero2,numero);
    }
  }

  public limpar():void{
    this.operacao = null;
    this.numero1 = null;
    this.numero2 = null;
    this.resultado = null;
  }

  get display():string{
    if(this.resultado != null){
      return this.resultado.toString();
    }
    if(this.numero2 != null){
      return this.numero2;
    }
    if(this.numero1 != null){
      return this.numero1;
    }
    return "0";
  }

  public concatenarNumero(numeroAtual:string,numeroConcatenar:string):string{
    if(numeroAtual == null || numeroAtual == "0"){
      numeroAtual = ""
    }

    if(numeroConcatenar == "." && numeroAtual == ""){
      return "0.";
    }

    if(numeroConcatenar == "." && numeroAtual.indexOf(".") > -1){
      return numeroAtual;
    }

    return numeroAtual + numeroConcatenar;
  }
}
