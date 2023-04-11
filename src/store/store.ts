import Vue from 'vue';
import Vuex from 'vuex';
import { Task } from './store.types';

Vue.use(Vuex);

const store = new Vuex.Store<{ tasks: Task[]; allDone: boolean }>({
  state: {
    tasks: [],
    allDone: false,
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
        id: Math.floor(Math.random() * 1000000),
        text: taskText,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    toggleTask(state, taskId: number): void {
      const task: Task | undefined = state.tasks.find((task: Task) => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
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

    toggleAllTasks(state): void {
      state.tasks.forEach((task: Task) => (task.completed = !task.completed));
      state.allDone = !state.allDone;
    },

    deleteCompletedTasks(state): void {
      state.tasks = state.tasks.filter((task: Task) => !task.completed);
      state.allDone = false;
    },

    deleteAllTasks(state): void {
      state.tasks = [];
      state.allDone = false;
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
