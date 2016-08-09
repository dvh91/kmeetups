import { Action } from '@ngrx/store';
import { EventsService } from '../services/events.service';

export const GET_EVENTS = 'GET_EVENTS';
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const GET_EVENT_BY_SLUG = 'GET_EVENT_BY_SLUG';
export const GET_EVENT_BY_SLUG_SUCCESS = 'GET_EVENT_BY_SLUG_SUCCESS';
export const ADD_EVENTS = 'ADD_EVENTS';

export interface EventsState {
    events: any;
}

const initialState: EventsState = {
    events: []
};

export default function (state = initialState, action: Action): EventsState {
  switch (action.type) {
    case GET_EVENTS:
      return state;

    case GET_EVENTS_SUCCESS:
      return state;

    case GET_EVENT_BY_SLUG:
      return state;

    case GET_EVENT_BY_SLUG_SUCCESS:
      return state;

    case ADD_EVENTS:
      return state;

    default:
      return state;
  }
};
