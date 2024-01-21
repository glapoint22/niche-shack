import { Routes } from "@angular/router";

export const SINGORAMA_ROUTES: Routes = [{
    path: '',

    children: [
        {
            path: '',
            loadComponent: () => import('./singorama.component').then(m => m.SingoramaComponent),
            data: {
                title: 'Singorama',
                description: 'Transform your singing abilities with Singorama\'s 10-minute daily program. 28 powerful audio modules enhance vocal range, tone, pitch, and control.',
                url: 'singorama',
                image: 'singorama/singorama-full-bundle-lg.png'
            }
        },
        {
            path: 'testimonials',
            loadComponent: () => import('./testimonials/testimonials.component').then(m => m.TestimonialsComponent),
            data: {
                title: 'Singorama Testimonials',
                description: 'Discover the real impact of Singorama through heartfelt testimonials. Explore how this program has transformed voices for singers worldwide.',
                url: 'singorama/testimonials'
            }
        },
        {
            path: 'faq',
            loadComponent: () => import('./faq/faq.component').then(m => m.FaqComponent),
            data: {
                title: 'Singorama FAQ',
                description: 'Get answers to all your questions and unravel the secrets to mastering your voice. This page offers insights and guidance to support your singing journey.',
                url: 'singorama/faq'
            }
        }
    ]
}];