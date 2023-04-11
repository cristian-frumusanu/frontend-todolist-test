<template>
  <div v-if="$store.state.tasks.length" class="w-full flex flex-col gap-4">
    <task-item
      v-for="task in $store.state.tasks"
      :id="task.id"
      :key="task.id"
      :value="task.text"
      :checked="task.completed"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskItem from '../../molecules/task-item/TaskItem.vue';

export default defineComponent({
  name: 'TaskList',
  components: {
    TaskItem,
  },
});
</script>
