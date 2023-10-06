import { Component } from '@angular/core';
import { Repositorio } from '../model/repositorio';
import { GitHubRestService } from '../service/git-hub-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome : string = "";

  repositorios : Repositorio[] = [];

  constructor(private gitHubService : GitHubRestService) {}

  pesquisa() {
    this.gitHubService.pesquisaRepositorios(this.nome)
      .subscribe({
        next: (repositorios) => this.repositorios = repositorios,
        complete: () => console.log("Ok"),
        error: (erro) => console.log("Erro ao fazer a pesquisa: " + erro)
      });
  }

}
