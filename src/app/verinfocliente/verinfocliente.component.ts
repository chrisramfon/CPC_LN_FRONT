import { Component, OnInit } from '@angular/core';

//Import de la clase ActivatedRoute para obtener el id de la URL
import { ActivatedRoute, Router } from '@angular/router';

//Import del servicio del cliente
import { ClienteService } from 'app/services/cliente.service';

@Component({
  selector: 'app-verinfocliente',
  templateUrl: './verinfocliente.component.html',
  styleUrls: ['./verinfocliente.component.css']
})
export class VerinfoclienteComponent implements OnInit {

  //Se crean los objetos de las clases importadas
  constructor(private router: Router, private route: ActivatedRoute, private ClienteServicio: ClienteService) { }

  /* Arreglos dentro del cliente */
  factura = [{ folio: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: "" }]
  Cuenta = [{ cuenta: "", banco: "", estado_b: "" }]

  /*Se declara al objeto Cliente*/ 
  Cliente = { _id: "", nombre: "", rfc: "", telefono: "", correo: "", direccion: "", __v: "", factura: [this.factura], informacion_bancaria: [this.Cuenta] }



  ngOnInit(): void {

    //Se ejecuta la función getCliente() cuando se entra al componente
    this.getCliente()

  }

  //Regresa a a lista de clientes
  volveraListadeCliente() {
    this.router.navigate(['admin/listacliente'])
  }

  //Busca al cliente y lo guarda en el objeto Cliente
  getCliente() {

    //Obtiene el _id de la URL y lo guarda en Cliente._id
    this.Cliente._id = this.route.snapshot.paramMap.get('id')
    this.ClienteServicio.getverCliente(this.Cliente).subscribe(res => {

      this.Cliente = res;
      console.log(this.Cliente)

    }, err => {
      console.log(err)
      alert("Cliente no encontrado")
    }//Fin del err=>{}
    )//Fin del subscribe
  }//Fin del metodo getCliente()
}//Fin de la clase
