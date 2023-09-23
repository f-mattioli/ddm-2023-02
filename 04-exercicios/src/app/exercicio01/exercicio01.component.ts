import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss'],
})
export class Exercicio01Component  implements OnInit {

  n1 : number|null = null;

  n2 : number|null = null;

  saida : string = "";

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    if (this.n1 && this.n2) {
      this.saida = `${this.n1} + ${this.n2} 
        = ${this.n1 + this.n2}`;
    } else {
      this.saida = "";
    }
  }




}
