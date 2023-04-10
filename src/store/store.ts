import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export type Task = {
  text: string;
  completed: boolean;
};

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
        text: taskText,
        completed: false,
      };
      state.tasks.push(newTask);
    },
  },
  actions: {},
  modules: {},
});

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
});

export default store;
