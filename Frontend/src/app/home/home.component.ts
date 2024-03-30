import { Component } from '@angular/core';
import { ClientesComponent } from "../clientes/clientes.component";
import { AddClientComponent } from "../add-client/add-client.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [ClientesComponent, AddClientComponent]
})
export class HomeComponent {

}
