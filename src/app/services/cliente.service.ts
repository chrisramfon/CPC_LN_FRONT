import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EditarclienteComponent } from 'app/editarcliente/editarcliente.component';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private consultaCLIENTEURL = "http://127.0.0.1:3000/cliente"
private verCLIENTEURL = "http://127.0.0.1:3000/cliente/Buscar"
private editarCLIENTEURL = "http://127.0.0.1:3000/cliente/Modificar"
private postaDEUDOURL = "http://127.0.0.1:3000/cliente/factura"
private consultaADEUDOURL = "http://127.0.0.1:3000/cliente/GuardarFactura"
private postcuentaURL = "http://127.0.0.1:3000/cliente/banco"

  constructor(private http: HttpClient) { }
  getCliente(){
    return this.http.get<any>(this.consultaCLIENTEURL)
  }
  EditarCliente(EdiID){
    return this.http.put<any>(this.editarCLIENTEURL,EdiID)
  }
  getverCliente(CliID){
    return this.http.post<any>(this.verCLIENTEURL,CliID)
  }

  postAdeudos(AdeudosID){
    return this.http.post<any>(this.postaDEUDOURL, AdeudosID)
  }

  postCuenta(Cuenta){
    return this.http.post<any>(this.postcuentaURL, Cuenta)
  }

  postCliente(Cliente){
    return this.http.post<any>(this.consultaCLIENTEURL, Cliente)
  }

}
