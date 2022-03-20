import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
import { TableListComponent } from './table-list/table-list.component';
import { AgregarclienteComponent } from './agregarcliente/agregarcliente.component';
import { ListaclienteComponent } from './listacliente/listacliente.component';
import { EditarclienteComponent } from './editarcliente/editarcliente.component';
import { VerinfoclienteComponent } from './verinfocliente/verinfocliente.component';
import { RegistrarAdeudoComponent } from './registrar-adeudo/registrar-adeudo.component';
import { RegistrarBancoComponent } from './registrar-banco/registrar-banco.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { VerEmpleadoComponent } from './ver-empleado/ver-empleado.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';

const routes: Routes = [
  {path: 'inicio', component: IniciosesionComponent}, 
  {path: 'admin', component: AdminLayoutComponent,
  children: 
    [
      {path:'', pathMatch:'full', redirectTo:'inicio'},
      {path:'agregarcliente', component: AgregarclienteComponent},
      {path:'listacliente', component: ListaclienteComponent},
      {path:'editarcliente/:id', component: EditarclienteComponent},
      {path:'verinfocliente/:id', component: VerinfoclienteComponent},
      {path:'registraradeudo/:id', component: RegistrarAdeudoComponent},
      {path: 'RegistrarBanco/:id', component: RegistrarBancoComponent},
      {path: 'inicio', component: InicioComponent},
      {path:'editarcliente', component: EditarclienteComponent},
      {path: 'ListaEmpleado', component: ListaEmpleadoComponent},
      {path: 'ModificarEmpleado/:id', component: ModificarEmpleadoComponent},
      {path: 'VerEmpleado/:id', component: VerEmpleadoComponent},
      {path: 'RegistrarEmpleado', component: RegistrarEmpleadoComponent} 
    ]
  },
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'**', redirectTo:'inicio',pathMatch:'full'} 
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})

export class AppRoutingModule { }
