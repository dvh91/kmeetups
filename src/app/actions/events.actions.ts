import { Action } from '@ngrx/store';
import { GET_EVENTS } from '../reducers/events.reducer';


export const getEvents = (start, end) => {
    return <Action>{ type: GET_EVENTS, payload: { start: start, end: end } };
}
