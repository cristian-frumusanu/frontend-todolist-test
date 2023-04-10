<template>
  <div class="w-full flex flex-row justify-center items-center">
    <input-view
      id="task-input"
      name="task-input"
      placeholder="add new task"
      type="text"
    ></input-view>
    <button-svg type="submit" icon-name="plus-square-thin"></button-svg>
  </div>
</template>

<script lang="ts">
import InputView from '../../atoms/inputs/input-text/InputView.vue';
import ButtonSvg from '../../atoms/buttons/button-svg/ButtonSvg.vue';

export default {
  name: 'TaskInput',
  components: {
    InputView,
    ButtonSvg,
  },
};
</script>
