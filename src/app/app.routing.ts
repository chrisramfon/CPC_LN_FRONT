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

const routes: Routes = [
  {path: 'inicio', component: IniciosesionComponent}, 
  {path: 'admin', component: AdminLayoutComponent,
  children: 
    [
      { path:'', pathMatch:'prefix', redirectTo:'agregarcliente'},
      {path:'agregarcliente', component: AgregarclienteComponent},
      {path:'', pathMatch:'prefix', redirectTo:'listacliente'},
      {path:'listacliente', component: ListaclienteComponent},
      {path:'', pathMatch:'prefix', redirectTo:'editarcliente'},
      {path:'editarcliente/:id', component: EditarclienteComponent},
      {path:'', pathMatch:'prefix', redirectTo:'verinfocliente'},
      {path:'verinfocliente/:id', component: VerinfoclienteComponent},
      {path:'registraradeudo/:id', component: RegistrarAdeudoComponent},
      {path: 'RegistrarBanco/:id', component: RegistrarBancoComponent}
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
