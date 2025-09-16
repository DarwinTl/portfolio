import { Routes } from '@angular/router';

export const routes: Routes = [

    { path: 'button', loadComponent: () => import('./features/portfolio/components/button/button.component').then(c => c.ButtonComponent) },
    {
        path: '', loadComponent: () => import('./layout/main/main.component').then(c => c.MainComponent),
        children: [
            { path: '', loadComponent: () => import('./features/portfolio/pages/landing/landing.component').then(c => c.LandingComponent) },
            { path: 'projects', loadComponent: () => import('./features/portfolio/pages/projects/projects.component').then(c => c.ProjectsComponent) },
            { path: 'projects/details/:id', loadComponent: () => import('./features/portfolio/pages/projects/details/details.component').then(c => c.DetailsComponent) },
            { path: 'profile', loadComponent: () => import('./features/portfolio/pages/profile/profile.component').then(c => c.ProfileComponent) }
        ]
    }
];
