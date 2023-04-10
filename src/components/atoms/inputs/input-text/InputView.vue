<template>
  <input
    :id="id"
    :value="value"
    type="text"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="classes"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
  name: 'InputView',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: 'border w-full p-1 rounded-sm border-sky-800',
      required: false,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    onInput: {
      type: Function as PropType<(payload: Event) => void>,
      default: () => {},
    },
    onEnter: {
      type: Function as PropType<(payload: Event) => void>,
      default: () => {},
    },
  },
});
</script>
