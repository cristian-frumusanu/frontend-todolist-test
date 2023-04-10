<template>
  <div class="w-full flex flex-col gap-4">
    <task-item
      v-for="(task, index) of tasks"
      :id="index"
      :key="index"
      :value="task.text"
      :checked="task.completed"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import TaskItem from '../../molecules/task-item/TaskItem.vue';

export type Task = {
  text: string;
  completed: boolean;
};

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem,
  },

  props: {
    tasks: {
      type: Array as PropType<Task[]>,
      default: (): Task[] => [],
    },
  },
});
</script>
