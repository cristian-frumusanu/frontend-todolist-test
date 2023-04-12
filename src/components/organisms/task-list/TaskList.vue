<template>
  <div v-if="$store.state.tasks.length" class="w-full flex flex-col gap-2">
    <div class="w-full mb-1 flex flex-row justify-between max-lg:gap-1">
      <button-svg
        :text="buttonText"
        icon-name="checks-thin"
        :parent-classes="defaultBtnClasses"
        :svg-classes="svgClasses"
        :on-click="toggleAllTasks"
      />
      <button-svg
        text="delete completed"
        icon-name="trash-thin"
        :parent-classes="defaultBtnClasses"
        :svg-classes="svgClasses"
        :on-click="deleteCompletedTasks"
      />
      <button-svg
        text="delete all"
        icon-name="trash-thin"
        :parent-classes="defaultBtnClasses"
        :svg-classes="svgClasses"
        :on-click="deleteAllTasks"
      />
    </div>
    <task-item
      v-for="task in $store.state.tasks"
      :id="task.id"
      :key="task.id"
      :value="task.text"
      :checked="task.completed"
      @toggle-task="resetButtonText"
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

  data(): { defaultBtnClasses: string; buttonText: string; svgClasses: string } {
    return {
      defaultBtnClasses:
        'w-[calc(6em+5vw)] p-1 flex flex-row justify-center items-center bg-[#D0E9F3] gap-2 rounded-md transition-colors shadow-sm text-[calc(.5em+.5vw)] hover:bg-[#AAD7E9] active:bg-[#82C0D8] max-xl:w-[calc(7em+6vw)] max-md:w-[calc(8em+7vw)] max-md:gap-1 max-[500px]:leading-none max-[390px]:w-[calc(7em+6vw)]',
      buttonText: this.$store.state.allDone ? 'uncheck all' : 'check all',
      svgClasses:
        'w-[calc(.7em+.6vw)] h-[calc(.7em+.6vw)] max-md:w-[calc(.7em+.7vw)] max-md:h-[calc(.7em+.7vw)]',
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
