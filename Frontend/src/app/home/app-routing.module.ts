import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { routes } from '../app.routes';
import { AddClientComponent } from '../add-client/add-client.component';
import { ClientesComponent } from '../clientes/clientes.component';
import { EmpleadosService } from '../../service/empleados.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';


const routesHijas: Routes = [
    {path: 'clientes', component:ClientesComponent},
    {path: 'addclient', component:AddClientComponent},
]

@NgModule({
  imports:[RouterModule.forChild(routesHijas), HttpClientModule,],
  exports:[RouterModule],
  providers:[EmpleadosService]
})
export class AppRoutingModule { }
