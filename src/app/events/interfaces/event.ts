import { GroupInterface } from '../../shared/interfaces/group';
import { UserInterface } from '../../shared/interfaces/user';

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
    rsvpState: boolean,
    total: number,
    trend: number,
    users: Array<UserInterface>
  }
}
