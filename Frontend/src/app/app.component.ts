import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './home/app-routing.module';
import { EmpleadosService } from '../service/empleados.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppRoutingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
