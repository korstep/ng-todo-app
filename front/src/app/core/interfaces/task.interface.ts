import { IList } from './list.interface';

export interface ITask {
  title: string;
  description: string;
  dueDate: Date;
  list: IList;
}
