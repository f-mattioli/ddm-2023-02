import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02b',
  templateUrl: './exercicio02b.component.html',
  styleUrls: ['./exercicio02b.component.scss'],
})
export class Exercicio02bComponent  implements OnInit {

  n1 : number|null = null;
  n2 : number|null = null;

  operacao : string = "soma";

  saida : string = "";

  constructor() { }

  ngOnInit() {}

  calcula() {
    switch (this.operacao) {
      case "soma":
        return this.soma();
      case "sub":
        return this.sub();
      case "mult":
        return this.mult();
      case "div":
        return this.div();
      default:
        this.saida = "Operação inválida!";
    }
  }

  soma() {
    if (this.n1 != null && this.n2 != null)
      this.saida = `${this.n1} + ${this.n2} 
        = ${this.n1 + this.n2}`;
    else
      this.saida = "";
  }

  sub() {
    if (this.n1 != null && this.n2 != null)
      this.saida = `${this.n1} - ${this.n2} 
        = ${this.n1 - this.n2}`;
    else
      this.saida = "";
  }

  mult() {
    if (this.n1 != null && this.n2 != null)
      this.saida = `${this.n1} * ${this.n2} 
        = ${this.n1 * this.n2}`;
    else
      this.saida = "";
  }

  div() {
    if (this.n1 != null && this.n2 != null) {
      if (this.n2 == 0)
        this.saida = "Erro: divisão por zero.";
      else
        this.saida = `${this.n1} / ${this.n2} 
        = ${this.n1 / this.n2}`;
    } else {
      this.saida = "";
    }
  }


}
