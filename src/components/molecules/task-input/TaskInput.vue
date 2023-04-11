<template>
  <div class="w-full flex flex-col justify-center items-center">
    <div class="w-full flex flex-row justify-center items-center">
      <input-view
        id="task-input"
        name="task-input"
        placeholder="add new task"
        type="text"
        :on-input="handleInput"
        classes="border w-full p-1 rounded-sm border-sky-800"
      />
      <!-- <button-svg type="button" icon-name="plus-square-thin" :on-click="handleClick" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputView from '../../atoms/input/InputView.vue';
// import ButtonSvg from '../../atoms/button/ButtonSvg.vue';

export default defineComponent({
  name: 'TaskInput',
  components: {
    InputView,
    // ButtonSvg,
  },

  methods: {
    handleInput(e: Event) {
      if (e instanceof InputEvent && e.target instanceof HTMLInputElement) {
        this.$emit('update-value', e.target.value);
      }
    },
  },
});
</script>
