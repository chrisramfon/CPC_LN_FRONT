import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { AgregarclienteComponent } from 'app/agregarcliente/agregarcliente.component';
import { ListaclienteComponent } from 'app/listacliente/listacliente.component';
import { EditarclienteComponent } from 'app/editarcliente/editarcliente.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { VerinfoclienteComponent } from 'app/verinfocliente/verinfocliente.component';
import { RegistrarAdeudoComponent } from 'app/registrar-adeudo/registrar-adeudo.component';
import { RegistrarBancoComponent } from 'app/registrar-banco/registrar-banco.component';
import { InicioComponent } from 'app/inicio/inicio.component';
import { ListaEmpleadoComponent } from 'app/lista-empleado/lista-empleado.component';
import { ModificarEmpleadoComponent } from 'app/modificar-empleado/modificar-empleado.component';
import { VerEmpleadoComponent } from 'app/ver-empleado/ver-empleado.component';
import { RegistrarEmpleadoComponent } from 'app/registrar-empleado/registrar-empleado.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AgregarclienteComponent,
    ListaclienteComponent,
    EditarclienteComponent,
    VerinfoclienteComponent,
    RegistrarAdeudoComponent,
    RegistrarBancoComponent,
    InicioComponent,
    ListaEmpleadoComponent,
    ModificarEmpleadoComponent,
    VerEmpleadoComponent,
    RegistrarEmpleadoComponent
  ]
})

export class AdminLayoutModule {}
