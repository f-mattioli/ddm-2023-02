import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Repositorio } from '../model/repositorio';

@Injectable({
  providedIn: 'root'
})
export class GitHubRestService {

  private url : string = "https://api.github.com/";

  constructor(private httpClient : HttpClient) { }

  pesquisaRepositorios(query : string) : Observable<Repositorio[]> {

    let params = new HttpParams().set("q", query);

    return this.httpClient.get<any>(
      this.url + "search/repositories", {params : params}
    ).pipe(map(resposta => {
      if (resposta && resposta.items) {
        return resposta.items;
      } else {
        return [];
      }
    }), 
    catchError(error => {
      console.log("Github service error: " + error);
      return throwError(() => new Error(error));
    }));
  }

}
