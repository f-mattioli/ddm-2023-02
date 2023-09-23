import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio02a',
  templateUrl: './exercicio02a.component.html',
  styleUrls: ['./exercicio02a.component.scss'],
})
export class Exercicio02aComponent  implements OnInit {

  n1 : number|null = null;
  n2 : number|null = null;

  saida : string = "";

  constructor() { }

  ngOnInit() {}

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
