import { Routes } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ConsultarComponent } from './consultar/consultar.component';

export const routes: Routes = [
  { path: '', component: PortalComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'consultar', component: ConsultarComponent }
];
