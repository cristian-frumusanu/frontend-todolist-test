<template>
  <div>
    <input-view
      id="task-input"
      name="task-input"
      placeholder="add new task"
      type="text"
    ></input-view>
    <button-view type="submit" icon-name="plus-square"></button-view>
  </div>
</template>

<script lang="ts">
import InputView from '../../atoms/input-text/InputView.vue';
import ButtonView from '../../atoms/button/ButtonView.vue';

export default {
  name: 'TaskInput',
  components: {
    InputView,
    ButtonView,
  },
};
</script>
