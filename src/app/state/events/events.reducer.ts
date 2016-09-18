import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as eventsActions from './events.actions';

export interface EventsState {
  events: any;
  loading: boolean;
  appendLoading: boolean;
  total: number;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  appendLoading: false,
  total: 0
};

export const eventsReducer = (state = initialState, action: Action): EventsState => {
  switch (action.type) {
    case eventsActions.GET_EVENTS:
      return Object.assign({}, state, {
        loading: true
      });

    case eventsActions.GET_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      });

    case eventsActions.GET_EVENT_BY_SLUG:
      return state;

    case eventsActions.GET_EVENT_BY_SLUG_SUCCESS:
      return state;

    case eventsActions.ADD_EVENTS:
      return Object.assign({}, state, {
        events: state.events.concat(action.payload)
      });

    case eventsActions.UPDATE_TOTAL:
      return Object.assign({}, state, {
        total: action.payload
      });

    case eventsActions.CHANGE_RSVP_STATE:
      return state;

    case eventsActions.GET_MORE_EVENTS:
      return Object.assign({}, state, {
        appendLoading: true
      });

    case eventsActions.GET_MORE_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        appendLoading: false
      });

    default:
      return state;
  }
}

export function getEvents() {
  return (state$: Observable<EventsState>) => state$
    .select(s => s.events);
};

export function getSingleEventBySlug(slug) {
  return (state$: Observable<EventsState>) => state$
    .select(s => s.events)
    .map(eventsState => {
      return eventsState.events.filter(e => e.slug === slug)
    })
    .map(matches => matches[0]);
};
