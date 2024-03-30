import { Component, Input, OnChanges, OnInit, SimpleChanges, viewChild } from '@angular/core';
import { EmpleadosService } from '../../service/empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnChanges   {
  @Input() ide !: number;
  @Input() nombre !: string;
  cargo !: string;

  
  data!: any;
  selectedOption: any;
  
  constructor(private employees : EmpleadosService){
   
    employees.getAllCargos().subscribe(response => { this.data=response
      console.log(response)});
  }
 
  ngOnChanges(changes: SimpleChanges) {
    if (changes['ide'] && changes['ide'].currentValue !== undefined &&
        changes['nombre'] && changes['nombre'].currentValue !== undefined) {
      console.log(this.ide, this.nombre);
      this.employees.getAllCargos().subscribe(response => {
        this.data = response;
        console.log(response);
      });
    }
  }
 
 
  EditarEmpleado(){
    switch (this.selectedOption){
      case "1":this.cargo ="Gerente"
      break;
      case "2":this.cargo ="Recursos Humanos"
      break;
      case "3":this.cargo ="Asistente"
      break;
      case "4":this.cargo ="Operador"
      break;

    }
      this.employees.updateEmployee(String(this.ide),this.nombre,this.selectedOption, this.cargo).subscribe(response =>{
        console.log(response)
        window.location.reload();
      });
  }
}
