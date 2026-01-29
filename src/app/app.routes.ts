import { Routes } from '@angular/router'; // <--- ESTA LÍNEA ES OBLIGATORIA

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'reprise',
    loadComponent: () => import('./reprise/reprise.page').then((m) => m.ReprisePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];