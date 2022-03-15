import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'app/services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-adeudo',
  templateUrl: './registrar-adeudo.component.html',
  styleUrls: ['./registrar-adeudo.component.css']
})

export class RegistrarAdeudoComponent implements OnInit {

  //Se declara el objeto adeudo para ser llenado con los datos del formulario
  Adeudo = {
    folio: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: "", _id: ""
  }

  constructor(private Aroute: ActivatedRoute, private ClienteServicio: ClienteService, private route: Router) { }

  ngOnInit(): void {
  }

  //Función para regresar a la lista de clientes
  volveraListadeCliente() {
    this.route.navigate(['admin/listacliente'])
  }


  postadeudo() {

    //Valida que los campos requeridos no estén vacios
    if (this.Adeudo.adeudo == "" || this.Adeudo.fecha_factura == "" || this.Adeudo.fecha_limite == "" || this.Adeudo.total == "" || this.Adeudo.folio == "") {
      alert("Faltan datos requeridos.")
      throw "Faltan datos requeridos."
    }

    //Guarda el id que se recibe desde la URL
    this.Adeudo._id = this.Aroute.snapshot.paramMap.get('id')

    //Envía el objeto adeudo al back end
    this.ClienteServicio.postAdeudos(this.Adeudo).subscribe(
      res => {
        console.log(res)
        alert("Adeudo registrado")

        //Ejecuta el método para limpiar el formulario
        this.limpiar()
      },
      err => {
        alert("El adeudo no se pudo registrar.")
        console.log(err)
      })

  }//Fin del metodo postadeud

  //Vacia los datos del formulario
  limpiar() {
    this.Adeudo = { folio: "", adeudo: "", pagado: "", total: "", fecha_factura: "", fecha_limite: "", notas: "", _id: "" }
  }
}



