import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdeudoService {

  private requestURL = "https://rickandmortyapi.com/api/character"
  private insertURL = "http://127.0.0.1:300/adeudo/registrar"

  constructor(private http: HttpClient) { }

  ListaAdeudo(){

    return this.http.get<any>(this.requestURL)

  }

  setAdeudo(cliente){
    return this.http.post<any>(this.insertURL, cliente)
  }

}
