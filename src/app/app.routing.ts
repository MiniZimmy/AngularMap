import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', children: [
    {path: 'home', loadChildren: './components/home/home.module#HomeModule', data: {title: 'Home'}},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'}
  ]}

];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
