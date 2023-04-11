import { Task } from '../../../store/store.types';

export type TaskItemData = {
  disabled: boolean;
  inputClasses: string;
  focus: boolean;
  editSvg: string;
  updatedTask: Pick<Task, 'id' | 'text'>;
};
