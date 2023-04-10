<template>
  <div class="w-full flex flex-row justify-center items-center">
    <input-view
      id="task-input"
      name="task-input"
      placeholder="add new task"
      type="text"
      :value="value"
      :on-input="handleInput"
      :on-enter="handleClick"
    ></input-view>
    <button-svg type="button" icon-name="plus-square-thin" :on-click="handleClick"></button-svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/inputs/input-text/InputView.vue';
import ButtonSvg from '../../atoms/buttons/button-svg/ButtonSvg.vue';

export default defineComponent({
  name: 'TaskInput',
  components: {
    InputView,
    ButtonSvg,
  },

  data(): { value: string } {
    return {
      value: '',
    };
  },

  methods: {
    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.value = e.target.value;
      }
    },
    handleClick() {
      if (this.value) {
        this.$emit('new-task', this.value);
        this.value = '';
      }
    },
  },
});
</script>
