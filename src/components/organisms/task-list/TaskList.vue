<template>
  <div v-if="$store.state.tasks.length" class="w-full flex flex-col gap-4">
    <div class="w-full flex flex-row justify-between mb-2">
      <button-svg
        :text="buttonText"
        icon-name="checks-thin"
        :parent-classes="defaultClasses"
        :on-click="toggleAllTasks"
      />
      <button-svg
        text="delete completed"
        icon-name="trash-thin"
        :parent-classes="defaultClasses"
        :on-click="deleteCompletedTasks"
      />
      <button-svg
        text="delete all"
        icon-name="trash-thin"
        :parent-classes="defaultClasses"
        :on-click="deleteAllTasks"
      />
    </div>
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
import ButtonSvg from '../../atoms/button/ButtonSvg.vue';
import TaskItem from '../../molecules/task-item/TaskItem.vue';

export default defineComponent({
  name: 'TaskList',
  components: {
    ButtonSvg,
    TaskItem,
  },

  data(): { defaultClasses: string; buttonText: string } {
    return {
      defaultClasses: 'flex flex-row justify-between gap-2',
      buttonText: this.$store.state.allDone ? 'uncheck all' : 'check all',
    };
  },

  methods: {
    toggleAllTasks(): void {
      this.$store.commit('toggleAllTasks');
      this.resetButtonText();
    },

    deleteCompletedTasks(): void {
      this.$store.commit('deleteCompletedTasks');
      this.resetButtonText();
    },

    deleteAllTasks(): void {
      this.$store.commit('deleteAllTasks');
      this.resetButtonText();
    },

    resetButtonText(): void {
      this.buttonText = this.$store.state.allDone ? 'uncheck all' : 'check all';
    },
  },
});
</script>
