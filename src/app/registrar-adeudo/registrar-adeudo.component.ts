import { Component, OnInit } from '@angular/core';
import { AdeudoService } from 'app/services/adeudo.service';

@Component({
  selector: 'app-registrar-adeudo',
  templateUrl: './registrar-adeudo.component.html',
  styleUrls: ['./registrar-adeudo.component.css']
})
export class RegistrarAdeudoComponent implements OnInit {

  adeudo = {
    RFC: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: ""
  }

  constructor(private Adeduo: AdeudoService) { }

  ngOnInit(): void {
  }

setAdeudo(){
  
  console.log(this.adeudo)
  alert('Adeudo funciona')
  this.cleanAdeudo();

  /*this.Adeduo.setAdeudo(this.adeudo).subscribe(
    res =>{
      console.log(res)
      alert('Registro guardato con exito')
      this.cleanAdeudo()
    }, err =>{
      alert('Error al registrar el adeudo.')
    })*/

}

cleanAdeudo(){
  this.adeudo = {RFC: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: ""}
}

}
