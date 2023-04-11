import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export type Task = {
  id: number;
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
        id: state.tasks.length,
        text: taskText,
        completed: false,
      };
      state.tasks.push(newTask);
    },

    handleTask(state, taskId: number): void {
      const completedTask = state.tasks.filter((task: Task) => task.id === taskId)[0];
      if (completedTask) {
        completedTask.completed = !completedTask.completed;
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
