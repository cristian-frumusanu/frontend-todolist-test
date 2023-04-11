import { Task } from '../../../store/store.types';

export type TaskItemData = {
  disabled: boolean;
  inputClasses: string;
  checkboxClasses: string;
  focus: boolean;
  editSvg: string;
  updatedTask: Pick<Task, 'id' | 'text'>;
};

export enum InputClasses {
  checkbox = 'w-5 h-5 appearance-none border border-sky-800 rounded-sm checked:bg-cyan-500 checked:p-2',
  textDisabled = 'border border-white bg-transparent text-cyan-950 text-xl',
  textActive = 'border w-full p-1 rounded-sm border-sky-800',
}
