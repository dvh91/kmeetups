import { EventInterface } from '../interfaces/event';

export class EventModel implements EventInterface {
  title: string;
  slug: string;
  description: string;
  content:string;
  group: any;
  location: string;
  createdOn: Date;
  organizer: any;
  startTime: Date;
  endTime: Date;
  attending: any;

  constructor(obj:EventInterface) {
    this.title = obj.title;
    this.slug = obj.slug;
    this.description = obj.description;
    this.content = obj.content;
    this.group = obj.group;
    this.location = obj.location;
    this.createdOn = new Date(obj.createdOn);
    this.organizer = obj.organizer;
    this.startTime = new Date(obj.startTime);
    this.endTime = new Date(obj.endTime);
    this.attending = obj.attending;
  }
}
