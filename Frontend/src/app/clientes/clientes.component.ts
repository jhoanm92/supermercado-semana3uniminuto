import { Component } from '@angular/core';
import { EmpleadosService } from '../../service/empleados.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { EditarComponent } from "../editar/editar.component";
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { response } from 'express';
interface Employees {
  id:number;
  nombre: string;
  cargo: Object;
}

@Component({
    selector: 'app-clientes',
    standalone: true,
    templateUrl: './clientes.component.html',
    styleUrl: './clientes.component.css',
    imports: [CommonModule, HttpClientModule, EditarComponent]
})
export class ClientesComponent {

  components:boolean= false;
  data!: any;
  idempleado!:number;
  nombreEmpelado!:string;
  cargo!:string;
  cargos!: any;
  filtroCargo: string = '';
  constructor(private employees: EmpleadosService) {
    employees.getAllEmployees().subscribe(response => {
      this.data = response
      console.log(response)
    });
    employees.getAllCargos().subscribe(response =>{
      this.cargos = response;
      console.log(response);
    })
  }


  EliminarEmpleado(id:number) {
    console.log(id)
    this.employees.deleteEmployee(id).subscribe(response => {
      window.location.reload();
    });
  }
  EditarEmpleado(id:number, nombre:string, cargo:string) {
    this.components = true;
    console.log(this.components)
    this.idempleado = id;
    this.nombreEmpelado = nombre;
    this.cargo = cargo;

  }

 
filtrarPorCargo(event: any): void {
  const cargoSeleccionado = event.target.value;
  if (cargoSeleccionado) {
      this.filtroCargo = cargoSeleccionado;
  } else {
      this.filtroCargo = ''; // Manejar caso de valor nulo o vacío
  }
}

filtrarEmpleadosPorCargo(): any[] {
  if (!this.filtroCargo) {
      return this.data; // Si no hay filtro, retornar todos los empleados
  }
  return this.data.filter((empleado: any) => empleado.role.name === this.filtroCargo);
}



}



