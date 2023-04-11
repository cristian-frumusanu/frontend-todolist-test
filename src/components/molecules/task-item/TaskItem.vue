<template>
  <div class="w-full flex flex-row justify-between items-center gap-2">
    <div class="w-full flex flex-row justify-start items-center gap-2" @click="handleTask">
      <input-view
        :id="'checkbox-' + id"
        :checked="checked"
        :name="'task' + id"
        type="checkbox"
        classes="w-5 h-5 appearance-none border border-sky-800 rounded-sm checked:bg-cyan-500 checked:p-2"
      />
      <input-view
        :id="'task-' + id"
        :value="value"
        name="task-item"
        type="text"
        :classes="[{ 'line-through': checked && disabled }, inputClasses]"
        :checked="checked"
        :disabled="disabled"
        :on-input="handleInput"
      />
    </div>
    <div class="flex flex-row gap-1">
      <button-svg
        v-if="!disabled"
        type="button"
        icon-name="check-thin"
        classes="w-6 h-6"
        :on-click="confirmEdit"
      />
      <button-svg type="button" :icon-name="editSvg" classes="w-6 h-6" :on-click="editTask" />
      <button-svg type="button" icon-name="trash-thin" classes="w-6 h-6" :on-click="deleteTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/input/InputView.vue';
import ButtonSvg from '../../atoms/button/ButtonSvg.vue';
import { TaskItemData } from './task-item.types';

export default defineComponent({
  name: 'TaskItem',
  components: {
    InputView,
    ButtonSvg,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },

  data(): TaskItemData {
    return {
      disabled: true,
      inputClasses: 'border border-white bg-transparent text-cyan-950 text-xl',
      focus: false,
      editSvg: 'pencil-thin',
      updatedTask: {
        id: this.id,
        text: '',
      },
    };
  },

  methods: {
    handleTask(): void {
      this.$store.commit('handleTask', this.id);
    },

    deleteTask(): void {
      this.$store.commit('deleteTask', this.id);
    },

    editTask(): void {
      this.disabled = false;
      this.inputClasses = 'border w-full p-1 rounded-sm border-sky-800';
    },

    confirmEdit(): void {
      if (this.updatedTask.text !== this.value) {
        this.$store.commit('updateTask', this.updatedTask);
      }
      this.disabled = true;
      this.inputClasses = 'border border-white bg-transparent text-cyan-950 text-xl';
    },

    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.updatedTask.text = e.target.value;
      }
    },
  },
});
</script>
