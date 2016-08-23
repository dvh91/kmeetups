import { provideRouter, RouterConfig } from '@angular/router';
import { HomeRouteComponent } from './routes/home-route';
import { LoginRouteComponent } from './routes/login-route';
import { EventRouteComponent } from './routes/event-route';

export const routes: RouterConfig = [
  { path: '', component: HomeRouteComponent },
  { path: 'login', component: LoginRouteComponent },
  { path: 'events/:slug', component: EventRouteComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
