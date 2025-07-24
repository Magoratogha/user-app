import { Routes } from '@angular/router';
import { Portal } from './components/portal/portal';
import { Add } from './components/add/add';
import { Consult } from './components/consult/consult';

export const routes: Routes = [
  {
    path: 'inicio',
    component: Portal,
  },
  {
    path: 'agregar',
    component: Add,
  },
  {
    path: 'consultar',
    component: Consult,
  },
  {
    path: '**',
    redirectTo: '/inicio',
  },
];
