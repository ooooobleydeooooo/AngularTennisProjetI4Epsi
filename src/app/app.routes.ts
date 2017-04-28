/**
 * Created by Ugo on 30/03/2017.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home } from './pages/home/home';
import {VueJoueur} from './pages/vueJoueur/vueJoueur';

export const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'vueJoueur', component: VueJoueur }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
