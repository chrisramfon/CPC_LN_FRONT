import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'app/services/cliente.service';
@Component({
  selector: 'app-verinfocliente',
  templateUrl: './verinfocliente.component.html',
  styleUrls: ['./verinfocliente.component.css']
})
export class VerinfoclienteComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private ClienteServicio:ClienteService) {  }

  Cuenta = [{cuenta: "", banco: "", estado_b: ""}]

  factura = { folio:"", adeudo:"", pagado:"", total:"", fecha_factura:"", fecha_limite:"", notas:"", }

  Cliente = { _id:"",nombre:"", rfc:"", telefono:"", correo:"", direccion:"", __v:"", informacion_bancaria: [this.Cuenta] }

  ngOnInit(): void {
    this.getCliente()
  }
  volveraListadeCliente(){
    this.router.navigate(['admin/listacliente'])
  }
  getCliente(){
    this.Cliente._id = this.route.snapshot.paramMap.get('id')
    this.ClienteServicio.getverCliente(this.Cliente).subscribe(res=>{
    this.Cliente = res; 
    console.log(this.Cuenta)
    }, err => {console.log(err)
    console.log(err)
    alert("Cliente no encontrado")
    }
    
    )
  }

}
