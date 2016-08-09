import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const API_BASE_PATH = 'https://kmeetup-be.herokuapp.com';

@Injectable()
export class EventsService {

  constructor(private http:Http) {}

  getEvents(start: number, end: number) {
    return this.http.get(`${API_BASE_PATH}/events?_start=${start}&_end=${end}`)
      .map(res => {
        let headers = res.headers;
        return {
          "total": headers.get('X-Total-Count'),
          "data": res.json()
        }
      });
  }

  getSingleEventBySlug(slug) {
    return this.http.get(`${API_BASE_PATH}/events?slug=${slug}`)
      .map(res => res.json())
      // workaround to get single instance only by property that is not id
      .map(events => events[0]);
  }

}
