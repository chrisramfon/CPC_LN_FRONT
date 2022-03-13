import { Component, OnInit } from '@angular/core';
import {ClienteService} from 'app/services/cliente.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listacliente',
  templateUrl: './listacliente.component.html',
  styleUrls: ['./listacliente.component.css']
})
export class ListaclienteComponent implements OnInit {

  constructor(private ListaCliente: ClienteService, private router:Router, private ServicioCliente: ClienteService) { }

  List
  
  ngOnInit(): void {
    this.getCliente()
  }
  getCliente(){
    this.ServicioCliente.getCliente().subscribe(
      res => {
        this.List = res
        console.log(this.List)
      }, err => {
        console.log(err)
      })
    }


  iraRegistrarcliente = function(){
    this.router.navigate(['admin/agregarcliente']);
  }

}
