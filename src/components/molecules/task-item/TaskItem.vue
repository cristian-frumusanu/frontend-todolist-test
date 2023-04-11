<template>
  <div class="w-full flex flex-row justify-between items-center gap-2">
    <div class="w-full flex flex-row justify-start items-center gap-2" @click="handleTask">
      <input-view
        :id="'checkbox-' + id"
        :checked="checked"
        :name="'task' + id"
        type="checkbox"
        classes="w-5 h-5 appearance-none border border-sky-800 rounded-sm checked:bg-cyan-500 checked:p-2"
      ></input-view>
      <input-view
        :id="'task-' + id"
        :value="value"
        name="task-item"
        type="text"
        classes="border-none bg-transparent text-cyan-950 text-xl"
        :checked="checked"
        disabled
      ></input-view>
    </div>
    <div class="flex flex-row gap-1">
      <button-svg type="button" icon-name="pencil-thin" classes="w-6 h-6"></button-svg>
      <button-svg
        type="button"
        icon-name="trash-thin"
        classes="w-6 h-6"
        :on-click="deleteTask"
      ></button-svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/input/InputView.vue';
import ButtonSvg from '../../atoms/button/ButtonSvg.vue';

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

  methods: {
    handleTask(): void {
      this.$store.commit('handleTask', this.id);
    },

    deleteTask(): void {
      this.$store.commit('deleteTask', this.id);
    },
  },
});
</script>
