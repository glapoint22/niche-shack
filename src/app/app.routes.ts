import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full',
    data: {
      title: 'Niche Shack - What\'s your niche?',
      description: 'Niche Shack is a user-friendly platform that brings together hundreds of offerings under one virtual roof. Whether you\'re into fitness, dating, business & marketing, or even animal care, we\'ve got you covered.',
      url: '',
      image: 'niche-shack-logo.png'
    }
  },
  {
    path: 'singorama',
    loadChildren: () => import('./components/singorama/singorama.routes').then(m => m.SINGORAMA_ROUTES)
  }
];