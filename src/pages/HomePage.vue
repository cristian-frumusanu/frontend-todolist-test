<template>
  <main
    class="w-6/12 h-full flex flex-col gap-3 py-5 px-10 justify-start items-center rounded-2xl bg-[url('./assets/cover.png')] bg-no-repeat bg-cover bg-center-center shadow-[rgba(99,99,99,0.2)0px_2px_8px_0px] max-xl:w-7/12 max-lg:px-8 max-md:gap-2 max-lg:w-8/12 max-md:w-3/4 max-md:px-3 max-sm:w-9/12 max-[500px]:w-11/12 max-[380px]:w-full max-[380px]:px-2"
  >
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
