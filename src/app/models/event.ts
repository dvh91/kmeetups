import { EventInterface } from '../interfaces/event';

export class EventModel implements EventInterface {
  title: string;
  description: string;
  group: any;
  location: string;
  createdOn: number;
  organizer: any;
  startTime: number;
  endTime: number;
  attending: any;

  constructor(obj:EventInterface) {
    this.title = obj.title;
    this.description = obj.description;
    this.group = obj.group;
    this.location = obj.location;
    this.createdOn = obj.createdOn;
    this.organizer = obj.organizer;
    this.startTime = obj.startTime;
    this.endTime = obj.endTime;
    this.attending = obj.attending;
  }
}
