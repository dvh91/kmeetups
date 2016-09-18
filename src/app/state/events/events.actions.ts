import { Action } from '@ngrx/store';

export const GET_EVENTS = 'GET_EVENTS';
export const getEvents = () => {
  return {
    type: GET_EVENTS
  }
};

export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS';
export const getEventsSuccess = () => {
  return {
    type: GET_EVENTS_SUCCESS
  }
};

export const GET_EVENT_BY_SLUG = 'GET_EVENT_BY_SLUG';
export const getEventBySlug = (slug) => {
  return {
    type: GET_EVENTS_SUCCESS,
    payload: slug
  }
};

export const GET_EVENT_BY_SLUG_SUCCESS = 'GET_EVENT_BY_SLUG_SUCCESS';
export const getEventBySlugSuccess = () => {
  return {
    type: GET_EVENT_BY_SLUG_SUCCESS
  }
};

export const ADD_EVENTS = 'ADD_EVENTS';
export const addEvents = (events) => {
  return {
    type: ADD_EVENTS,
    payload: events
  }
};

export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const updateTotal = (total) => {
  return {
    type: UPDATE_TOTAL,
    payload: total
  }
};

export const CHANGE_RSVP_STATE = 'CHANGE_RSVP_STATE';
export const changeRsvpState = (state) => {
  return {
    type: CHANGE_RSVP_STATE,
    payload: state
  }
};

export const GET_MORE_EVENTS = 'GET_MORE_EVENTS';
export const getMoreEvents = () => {
  return {
    type: GET_MORE_EVENTS
  }
};

export const GET_MORE_EVENTS_SUCCESS = 'GET_MORE_EVENTS_SUCCESS';
export const getMoreEventsSuccess = () => {
  return {
    type: GET_MORE_EVENTS_SUCCESS
  }
};
