import { Routes } from '@angular/router';

export const routes: Routes = [
  // Niche Shack
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

  // Singorama
  {
    path: 'singorama',
    loadChildren: () => import('./components/singorama/singorama.routes').then(m => m.SINGORAMA_ROUTES),
    data: {
      hoplink: 'https://b8752e78q2-mfr0eohvn42txb7.hop.clickbank.net'
    }
  },

  // Pianoforall
  {
    path: 'pianoforall',
    loadChildren: () => import('./components/pianoforall/pianoforall.routes').then(m => m.PIANOFORALL_ROUTES),
    data: {
      hoplink: 'https://b9f83kven3xt8m8co5uaa3xham.hop.clickbank.net'
    }
  }
];