import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component')
        .then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'singorama',
    loadChildren: () =>
      import('./components/singorama/singorama.routes')
        .then(m => m.SINGORAMA_ROUTES)
  }
];