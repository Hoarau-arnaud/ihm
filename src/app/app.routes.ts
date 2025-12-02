import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';

export const routes: Routes = [
  { path: '',         component: HomeComponent },
  { path: 'about',    loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'login',    loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'profile',  loadComponent: () => import('./pages/profile/profile').then(m => m.ProfileComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterComponent) },
  { path: 'actualites', loadComponent: () => import('./pages/actualites/actualites').then(m => m.Actualites) },
  { path: 'utilisateurs', loadComponent: () => import('./pages/utilisateurs/utilisateurs').then(m => m.Utilisateurs) },
  { path: 'card', loadComponent: () => import('./pages/cards/cards').then(m => m.Cards) },

];
