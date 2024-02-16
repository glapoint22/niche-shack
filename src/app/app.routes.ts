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
    path: 'tedswoodworking/:id',
    loadComponent: () => import('./components/teds-woodworking/teds-woodworking.component').then(m => m.TedsWoodworkingComponent),
  },
  {
    path: 'paidonlinewritingjobs/:id',
    loadComponent: () => import('./components/paid-online-writing-jobs/paid-online-writing-jobs.component').then(m => m.PaidOnlineWritingJobsComponent),
  },
  {
    path: 'livechatjobs',
    loadComponent: () => import('./components/live-chat-jobs/live-chat-jobs.component').then(m => m.LiveChatJobsComponent),
    data: {
      title: 'Live Chat Assistant',
      description: 'Work as a live chat assistant from the comfort of your own home.',
      url: 'livechatjobs'
    }
  }
];