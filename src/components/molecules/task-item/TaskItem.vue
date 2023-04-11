<template>
  <div class="w-full flex flex-row justify-between items-center gap-2">
    <div class="w-full flex flex-row justify-start items-center gap-2" @click="toggleTask">
      <input-view
        :id="'checkbox-' + id"
        :checked="checked"
        :name="'task' + id"
        type="checkbox"
        :classes="[{ 'pointer-events-none': !disabled }, checkboxClasses]"
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
      <button-svg v-if="!disabled" icon-name="check-thin" :on-click="confirmEdit" />
      <button-svg type="button" :icon-name="editSvg" :on-click="editTask" />
      <button-svg icon-name="trash-thin" :on-click="deleteTask" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/input/InputView.vue';
import ButtonSvg from '../../atoms/button/ButtonSvg.vue';
import { TaskItemData, InputClasses } from './task-item.types';

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
      inputClasses: InputClasses.textDisabled,
      checkboxClasses: InputClasses.checkbox,
      focus: false,
      editSvg: 'pencil-thin',
      updatedTask: {
        id: this.id,
        text: this.value,
      },
    };
  },

  methods: {
    toggleTask(): void {
      if (this.disabled) {
        this.$store.commit('toggleTask', this.id);
      }
    },

    deleteTask(): void {
      this.$store.commit('deleteTask', this.id);
    },

    editTask(): void {
      this.disabled = !this.disabled;
      this.inputClasses = !this.disabled ? InputClasses.textActive : InputClasses.textDisabled;
      this.editSvg = !this.disabled ? 'x-thin' : 'pencil-thin';
    },

    confirmEdit(): void {
      if (this.updatedTask.text !== this.value) {
        this.$store.commit('updateTask', this.updatedTask);
      }
      this.disabled = true;
      this.inputClasses = InputClasses.textDisabled;
    },

    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.updatedTask.text = e.target.value;
      }
    },
  },
});
</script>
