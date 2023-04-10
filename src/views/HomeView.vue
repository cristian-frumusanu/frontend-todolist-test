<template>
  <main class="w-1/3 flex flex-col gap-3 justify-center items-center">
    <h2 class="text-2xl text-center">What would you like to do?</h2>
    <task-input />
    <task-list />
  </main>
</template>

<script lang="ts">
import TaskInput from '../components/molecules/task-input/TaskInput.vue';
import TaskList from '../components/organisms/task-list/TaskList.vue';

export default {
  name: 'HomeView',
  components: {
    TaskInput,
    TaskList,
  },
};
</script>
