import { GroupInterface } from './group';
import { UserInterface } from './user';

export interface EventInterface {
  title: string;
  slug: string,
  description: string;
  content?: string;
  group: GroupInterface,
  location: string,
  createdOn: any,
  organizer: UserInterface,
  startTime: any,
  endTime: any,
  attending: {
    total: number,
    trend: number,
    users: Array<UserInterface>
  }
}
