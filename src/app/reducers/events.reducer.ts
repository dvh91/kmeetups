import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';

import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENT_BY_SLUG = 'GET_EVENT_BY_SLUG';
export const GET_EVENT_BY_SLUG_SUCCESS = 'GET_EVENT_BY_SLUG_SUCCESS';
export const ADD_EVENTS = 'ADD_EVENTS';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const CHANGE_RSVP_STATE = 'CHANGE_RSVP_STATE';
export const GET_MORE_EVENTS = 'GET_MORE_EVENTS';
export const GET_MORE_EVENTS_SUCCESS = 'GET_MORE_EVENTS_SUCCESS';


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
    case GET_EVENTS:
      return Object.assign({}, state, {
        loading: true
      });

    case GET_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        loading: false
      });

    case GET_EVENT_BY_SLUG:
      return state;

    case GET_EVENT_BY_SLUG_SUCCESS:
      return state;

    case ADD_EVENTS:
      return Object.assign({}, state, {
        events: state.events.concat(action.payload)
      });

    case UPDATE_TOTAL:
      return Object.assign({}, state, {
        total: action.payload
      });

    case CHANGE_RSVP_STATE:
      return state;

    case GET_MORE_EVENTS:
      return Object.assign({}, state, {
        appendLoading: true
      });

    case GET_MORE_EVENTS_SUCCESS:
      return Object.assign({}, state, {
        appendLoading: false
      });

    default:
      return state;
  }
}

export function getEventsSlugs() {
  return (state$: Observable<EventsState>) => state$
    .select(s => s.events)
    .map(events => events.events)
    .map(event => event);
}
