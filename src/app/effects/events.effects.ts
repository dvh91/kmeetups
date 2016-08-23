import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import * as eventsActions from '../actions/events.actions';

@Injectable()
export class EventsEffects {

  constructor(private actions$: Actions) {}

  @Effect() getSingleEventBySlug$ = this.actions$
    .ofType(eventsActions.GET_EVENT_BY_SLUG)
    .map(update => JSON.stringify(update));

}
