import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: '',
        loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent),
    },
    {
        path: 'main',
        loadComponent: () => import('./pages/main/main.component').then(m => m.MainComponent),
    },
    {
        path: 'map',
        loadComponent: () => import('./pages/map/map.component').then(m => m.MapComponent),
    },
];
