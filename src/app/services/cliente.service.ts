import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditarclienteComponent } from 'app/editarcliente/editarcliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private consultaURL = "https://rickandmortyapi.com/api/character"

  constructor(private http: HttpClient) { }
  ListaCliente(){
    return this.http.get<any>(this.consultaURL)
  }
  EditarCliente(cliente:EditarclienteComponent){
    //return this.http.put(this.consultaURL);
  }

}
