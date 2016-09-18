import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRouteComponent } from './events/routes/home-route';
import { EventRouteComponent } from './events/routes/event-route';
import { LoginRouteComponent } from './auth/routes/login-route';

export const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'login', component: LoginRouteComponent },
  { path: 'events/:slug', component: EventRouteComponent }
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);
