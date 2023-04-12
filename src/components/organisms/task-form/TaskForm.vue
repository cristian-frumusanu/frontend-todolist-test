<template>
  <form
    ref="form"
    class="w-full h-fit flex flex-col justify-center items-center mb-2"
    @submit.prevent="addTask"
  >
    <text-view
      tag="h2"
      classes="w-full mb-2 text-[calc(1.2em+1.2vw)] text-center text-[#35566e] max-lg:text-[calc(1.1em+1vw)] max-[390px]:text-[calc(1em+1vw)]"
      text="What would you like to do?"
    />
    <div class="w-full h-[calc(1.2em+1.2vw)] flex flex-row justify-center items-center gap-2">
      <task-input @update-value="saveInputValue" />
      <button-svg
        type="submit"
        icon-name="plus-bicolor"
        icon-color="#D0E9F3"
        svg-classes="w-full h-full transition-colors hover:fill-[#AAD7E9] active:fill-[#82C0D8]"
        parent-classes="w-[calc(1.6em+1.6vw)] h-full"
      />
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
