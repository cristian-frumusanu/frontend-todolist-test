<template>
  <main class="w-6/12 flex flex-col gap-3 justify-center items-center">
    <task-form />
    <task-list />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskForm from '../components/organisms/task-form/TaskForm.vue';
import TaskList from '../components/organisms/task-list/TaskList.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    TaskForm,
    TaskList,
  },
});
</script>
