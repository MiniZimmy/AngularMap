import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: './components/home/home.module#HomeModule'},
  {path: 'map', loadChildren: './components/map/index#MapModule'}, //Add our new route
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
