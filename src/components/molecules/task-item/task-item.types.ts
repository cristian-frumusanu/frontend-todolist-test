import { Task } from '../../../store/store.types';

export type TaskItemData = {
  disabled: boolean;
  inputClasses: string;
  checkboxClasses: string;
  focus: boolean;
  editSvg: string;
  updatedTask: Pick<Task, 'id' | 'text'>;
};
