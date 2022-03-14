import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-banco',
  templateUrl: './registrar-banco.component.html',
  styleUrls: ['./registrar-banco.component.css']
})
export class RegistrarBancoComponent implements OnInit {

Cuenta = {cuenta: "", banco: "", _id: ""}

  constructor(private Cliente: ClienteService, private Aroute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  postCuenta(){
    if(this.Cuenta.cuenta == ""){
      alert("Faltan datos requeridos.")
      throw "Faltan datos requeridos."
    }

    this.Cuenta._id = this.Aroute.snapshot.paramMap.get('id')
    this.Cliente.postCuenta(this.Cuenta).subscribe(
      res=>{
        console.log(res)
        alert("Cuenta registrada.")
        this.limpiar()
      }, 
      err =>{
        alert("La cuenta no se pudo registrar.")
        console.log(err)
      })

  }

  limpiar(){
    this.Cuenta = {cuenta: "", banco: "", _id: ""}
  }

}
