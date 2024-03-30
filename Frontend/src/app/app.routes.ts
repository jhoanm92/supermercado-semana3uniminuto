import { Routes } from '@angular/router';


export const routes: Routes = [
    {path: '', loadChildren: () =>  import( './home/app-routing.module').then(m => m.AppRoutingModule)}
  
];

