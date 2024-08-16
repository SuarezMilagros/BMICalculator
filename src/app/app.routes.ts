import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'resultado/:valor', component: ResultadoComponent }
];
