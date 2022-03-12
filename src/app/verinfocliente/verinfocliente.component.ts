import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-verinfocliente',
  templateUrl: './verinfocliente.component.html',
  styleUrls: ['./verinfocliente.component.css']
})
export class VerinfoclienteComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) {  }
  id
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

  }
  volveraListadeCliente(){
    this.router.navigate(['admin/listacliente'])
  }
}
