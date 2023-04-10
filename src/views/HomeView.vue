<template>
  <main>
    <h1>This is home page</h1>
    <task-input />
  </main>
</template>

<script lang="ts">
import TaskInput from '../components/molecules/task-input/TaskInput.vue';

export default {
  name: 'HomeView',
  components: {
    TaskInput,
  },
};
</script>
