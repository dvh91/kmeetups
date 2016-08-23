import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef, enableProdMode, provide, PLATFORM_PIPES, PLATFORM_DIRECTIVES } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, ROUTER_DIRECTIVES } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { instrumentStore } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventsEffects } from './effects/events.effects';
import { eventsReducer } from './reducers/events.reducer';
import { routes } from './app.routes';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    EffectsModule.run(EventsEffects),
  ],
  providers: [
    provide(PLATFORM_DIRECTIVES, { useValue: [ROUTER_DIRECTIVES], multi: true }),
    provideStore({ events: eventsReducer }),
    instrumentStore(),
    EventsService
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
