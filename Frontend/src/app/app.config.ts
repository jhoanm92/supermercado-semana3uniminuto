import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { EmpleadosService } from '../service/empleados.service';


export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideClientHydration(),]
};
