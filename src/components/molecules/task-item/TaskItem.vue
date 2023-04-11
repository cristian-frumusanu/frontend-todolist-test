<template>
  <div
    class="w-full py-2 px-5 border-2 rounded-md flex flex-row justify-between items-center gap-2 bg-[#F7FDFF]"
  >
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
    <div class="flex flex-row gap-2">
      <button-svg
        v-if="!disabled"
        icon-color="#35566E"
        icon-name="check-thin"
        parent-classes="hover:animate-[wiggle_2s_linear_infinite]"
        :on-click="confirmEdit"
      />
      <button-svg
        type="button"
        icon-color="#35566E"
        :icon-name="editSvg"
        parent-classes="hover:animate-[wiggle_2s_linear_infinite]"
        :on-click="editTask"
      />
      <button-svg
        icon-name="trash-thin"
        icon-color="#35566E"
        parent-classes="hover:animate-[wiggle_2s_linear_infinite]"
        :on-click="deleteTask"
      />
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
      inputClasses:
        'w-full p-2 border border-[#F7FDFF] bg-[#F7FDFF] text-cyan-950 text-[calc(.6em+.6vw)]',
      checkboxClasses:
        'w-[calc(.8em+.7vw)] h-[calc(.8em+.7vw)] appearance-none transition-colors border border-[#35566e] rounded-sm checked:bg-[#82C0D8] checked:p-2',
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
        this.$emit('toggle-task');
      }
    },

    deleteTask(): void {
      this.$store.commit('deleteTask', this.id);
    },

    editTask(): void {
      this.disabled = !this.disabled;
      this.inputClasses = !this.disabled
        ? 'border w-full p-2 rounded-sm border-[#35566e]  text-[calc(.6em+.6vw)] focus:outline-none'
        : 'w-full p-2 border border-[#F7FDFF] bg-[#F7FDFF] text-cyan-950 text-[calc(.6em+.6vw)]';
      this.editSvg = !this.disabled ? 'x-thin' : 'pencil-thin';
    },

    confirmEdit(): void {
      if (this.updatedTask.text !== this.value) {
        this.$store.commit('updateTask', this.updatedTask);
      }
      this.disabled = true;
      this.inputClasses =
        'w-full p-2 border border-[#F7FDFF] bg-[#F7FDFF] text-cyan-950 text-[calc(.6em+.6vw)]';
    },

    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.updatedTask.text = e.target.value;
      }
    },
  },
});
</script>
