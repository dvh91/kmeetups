import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRouteComponent } from './routes/home-route';
import { LoginRouteComponent } from './routes/login-route';
import { EventRouteComponent } from './routes/event-route';

export const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'login', component: LoginRouteComponent },
  { path: 'events/:slug', component: EventRouteComponent }
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);
