import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { EmpleadosService } from '../service/empleados.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    EmpleadosService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
