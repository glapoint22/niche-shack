import { Routes } from "@angular/router";

export const SINGORAMA_ROUTES: Routes = [{
    path: '',
    
    children: [
        {
            path: '',
            loadComponent: () =>
            import('./singorama.component')
                .then(m => m.SingoramaComponent)
        },
        {
            path: 'testimonials',
            loadComponent: () =>
                import('./testimonials/testimonials.component')
                    .then(m => m.TestimonialsComponent)
        },
        {
            path: 'faq',
            loadComponent: () =>
                import('./faq/faq.component')
                    .then(m => m.FaqComponent)
        }
    ]
}];