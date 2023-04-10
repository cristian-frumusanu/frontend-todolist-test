<template>
  <div>
    <checkbox-view
      :id="'task-status' + id"
      :checked="checked"
      :name="'task' + id"
      type="checkbox"
    ></checkbox-view>
    <input-view
      :id="'task-item' + id"
      :value="value"
      name="task-item"
      type="text"
      disabled
    ></input-view>
    <div>
      <button-view type="button" icon-name="pencil"></button-view>
      <button-view type="button" icon-name="trash"></button-view>
    </div>
  </div>
</template>

<script lang="ts">
import CheckboxView from '../../atoms/input-checkbox/CheckboxView.vue';
import InputView from '../../atoms/input-text/InputView.vue';
import ButtonView from '../../atoms/button/ButtonView.vue';

export default {
  name: 'TaskItem',
  components: {
    CheckboxView,
    InputView,
    ButtonView,
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
};
</script>
