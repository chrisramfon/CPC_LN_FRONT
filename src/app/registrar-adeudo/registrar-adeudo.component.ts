import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registrar-adeudo',
  templateUrl: './registrar-adeudo.component.html',
  styleUrls: ['./registrar-adeudo.component.css']
})
export class RegistrarAdeudoComponent implements OnInit {

Adeudo = {
  folio:"", adeudo:"", pagado:"", total:"", fecha_factura:"", fecha_limite:"", notas:"", _id:""
}

  constructor(private Aroute:ActivatedRoute,private ClienteServicio:ClienteService) { }

  ngOnInit(): void {
  }
postadeudo(){
if (this.Adeudo.adeudo=="" || this.Adeudo.fecha_factura=="" || this.Adeudo.fecha_limite=="" || this.Adeudo.total==""|| this.Adeudo.folio==""){
  alert("Faltan datos requeridos.")
  throw "Faltan datos requeridos."
}
this.Adeudo._id = this.Aroute.snapshot.paramMap.get('id')
this.ClienteServicio.postAdeudos(this.Adeudo).subscribe(
  res =>{
    console.log(res)
    alert("Adeudo registrado")
    this.limpiar()
  }, 
  err=>{
    alert("El adeudo no se pudo registrar.")
    console.log(err)
  })
  
}
limpiar(){
  this.Adeudo = { folio:"", adeudo:"", pagado:"", total:"", fecha_factura:"", fecha_limite:"", notas:"", _id:""}
}
}



