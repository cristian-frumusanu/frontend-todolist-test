<template>
  <form
    ref="form"
    class="w-full flex flex-col justify-center items-center"
    @submit.prevent="addTask"
  >
    <text-view tag="h2" classes="text-2xl text-center" text="What would you like to do?" />
    <div class="w-full flex flex-row justify-center items-center">
      <task-input @update-value="saveInputValue" />
      <button-svg type="submit" icon-name="plus-square-thin" svg-classes="w-12 h-12" />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextView from '../../atoms/text/TextView.vue';
import TaskInput from '../../molecules/task-input/TaskInput.vue';
import ButtonSvg from '../../atoms/button/ButtonSvg.vue';

export default defineComponent({
  name: 'TaskForm',
  components: {
    TextView,
    TaskInput,
    ButtonSvg,
  },

  data(): { value: string } {
    return {
      value: '',
    };
  },

  methods: {
    saveInputValue(value: string): void {
      this.value = value;
    },

    addTask(): void {
      if (this.value) {
        this.$store.commit('addTask', this.value);
        this.resetForm();
      }
    },

    resetForm(): void {
      if (this.$refs.form && this.$refs.form instanceof HTMLFormElement) {
        this.$refs.form.reset();
      }
    },
  },
});
</script>
