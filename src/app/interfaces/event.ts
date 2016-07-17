import { Group } from './group';
import { User } from './user';

export interface EventInterface {
  title: string;
  description: string;
  group: Group,
  location: string,
  createdOn: number,
  organizer: User,
  startTime: number,
  endTime: number,
  attending: {
    total: number,
    users: Array<User>
  }
}
