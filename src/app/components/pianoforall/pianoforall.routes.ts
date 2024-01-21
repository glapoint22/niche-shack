import { Routes } from "@angular/router";

export const PIANOFORALL_ROUTES: Routes = [{
    path: '',

    children: [
        {
            path: '',
            loadComponent: () => import('./pianoforall.component').then(m => m.PianoforallComponent),
            data: {
                title: 'Pianoforall',
                description: 'Pianoforall is recognized as one of the best online piano courses in the world, having transformed the musical journeys of over 450,000 users for more than a decade.',
                url: 'pianoforall',
                image: 'pianoforall/pianoforall-product.avif'
            }
        },
        {
            path: 'testimonials',
            loadComponent: () => import('./testimonials/testimonials.component').then(m => m.TestimonialsComponent),
            data: {
                title: 'Pianoforall Testimonials',
                description: 'Discover the real impact of Pianoforall through heartfelt testimonials. Explore how this program has taught students worldwide.',
                url: 'pianoforall/testimonials'
            }
        },
        {
            path: 'faq',
            loadComponent: () => import('./faq/faq.component').then(m => m.FaqComponent),
            data: {
                title: 'Pianoforall FAQ',
                description: 'Get answers to all your questions and unravel the secrets to mastering the piano. This page offers insights and guidance to support your musical journey.',
                url: 'pianoforall/faq'
            }
        }
    ]
}];