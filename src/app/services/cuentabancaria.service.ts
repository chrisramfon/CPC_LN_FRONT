import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CuentabancariaService {

private consultaURL = "https://rickandmortyapi.com/api/character"
private editarURL = ""


  constructor(private http:HttpClient) { }
  ListaCuentaBancaria(){
    return this.http.get<any>(this.consultaURL)
  }

}
