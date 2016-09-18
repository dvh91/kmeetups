import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

import * as eventsActions from '../actions/events.actions';

@Injectable()
export class EventsEffects {

  constructor(private actions$: Actions) {}

  // @Effect() getEventss$ = this.actions$
  //   .ofType(eventsActions.GET_EVENTS)
  //   .map(action => JSON.stringify(action.payload))
    //.switchMap(a => console.log(a));

}
