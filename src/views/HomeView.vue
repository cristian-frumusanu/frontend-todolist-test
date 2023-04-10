<template>
  <main class="w-1/3 flex flex-col gap-3 justify-center items-center">
    <h2 class="text-2xl text-center">What would you like to do?</h2>
    <task-input @new-task="addTask" />
    <task-list :tasks="tasks" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskInput from '../components/molecules/task-input/TaskInput.vue';
import TaskList, { Task } from '../components/organisms/task-list/TaskList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    TaskInput,
    TaskList,
  },

  data(): { tasks: Task[] } {
    return {
      tasks: [],
    };
  },

  methods: {
    addTask(data: string): void {
      const newTask: Task = {
        text: data,
        completed: false,
      };
      this.tasks.push(newTask);
    },
  },
});
</script>
