import { Component } from '@angular/core';
import { EmpleadosService } from '../../service/empleados.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Cargo {
  id:number;
  nombre: string;
}
@Component({
  selector: 'app-add-client',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {

  data!:any;

  selectedOption: any;
  constructor(private employees : EmpleadosService){
    employees.getAllCargos().subscribe(response => { this.data=response
      console.log(response)});
  }

  CrearEmpleado(nombre: string) {
    this.employees.CreateContact(nombre, this.selectedOption).subscribe(response => {
      alert("exito")
      console.log(response);
      window.location.reload();
    }
    );

  }

  
}


