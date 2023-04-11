import Vue from 'vue';
import Vuex from 'vuex';
import { Task } from './store.types';

Vue.use(Vuex);

const store = new Vuex.Store<{ tasks: Task[] }>({
  state: {
    tasks: [],
  },
  getters: {},
  mutations: {
    initializeStore(state): void {
      const data: string | null = localStorage.getItem('store') || null;
      if (data) {
        this.replaceState(Object.assign(state, JSON.parse(data)));
      }
    },

    addTask(state, taskText: string): void {
      const newTask = {
        id: state.tasks.length,
        text: taskText,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    handleTask(state, taskId: number): void {
      const completedTask: Task = state.tasks.filter((task: Task) => task.id === taskId)[0];
      if (completedTask) {
        completedTask.completed = !completedTask.completed;
      }
    },

    deleteTask(state, taskId: number): void {
      state.tasks = state.tasks.filter((task: Task) => task.id !== taskId);
    },

    updateTask(state, { id, text }: Task): void {
      const updatedTask: Task = state.tasks.filter((task: Task) => task.id === id)[0];
      if (updatedTask) {
        updatedTask.text = text;
      }
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
