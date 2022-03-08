import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdeudoService {

  private consultaURL = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }

  ListaAdeudo(){

    return this.http.get<any>(this.consultaURL)

  }

}