<template>
  <main>
    <h1>This is home page</h1>
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
