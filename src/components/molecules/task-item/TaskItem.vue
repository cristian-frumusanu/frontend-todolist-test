<template>
  <div class="w-full flex flex-row justify-between items-center gap-2">
    <div class="w-full flex flex-row justify-start items-center gap-2" @click="handleTask">
      <checkbox-view
        :id="'checkbox-' + id"
        :checked="checked"
        :name="'task' + id"
        type="checkbox"
      ></checkbox-view>
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
import CheckboxView from '../../atoms/inputs/input-checkbox/CheckboxView.vue';
import InputView from '../../atoms/inputs/input-text/InputView.vue';
import ButtonSvg from '../../atoms/buttons/button-svg/ButtonSvg.vue';

export default defineComponent({
  name: 'TaskItem',
  components: {
    CheckboxView,
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
