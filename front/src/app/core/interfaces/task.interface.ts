import { IList } from './list.interface';

export interface ITask {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  list: IList;
}
