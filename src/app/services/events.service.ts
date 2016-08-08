import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventsService {

  private API_BASE_PATH: string = 'http://kmeetup-be.herokuapp.com';

  constructor(private http:Http) {}

  getEvents(start: number, end: number) {
    return this.http.get(`${this.API_BASE_PATH}/events?_start=${start}&_end=${end}`)
      .map(res => {
        let headers = res.headers;
        return {
          "total": headers.get('X-Total-Count'),
          "data": res.json()
        }
      });
  }

  getSingleEventBySlug(slug) {

  }

}
