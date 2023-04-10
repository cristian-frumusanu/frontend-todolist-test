<template>
  <div>
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

type Task = {
  text: string;
  completed: boolean;
};

type Props = Task[];

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem,
  },
  props: {
    tasks: {
      type: Array as PropType<Props>,
      default: (): Props => [
        {
          text: 'test one',
          completed: true,
        },
        {
          text: 'test two',
          completed: false,
        },
      ],
    },
  },
});
</script>
