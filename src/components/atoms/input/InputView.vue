<template>
  <input
    :id="id"
    :value="value"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="[{ 'line-through': type === 'text' && checked }, classes]"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { Input } from '../atoms.types';

export default defineComponent({
  name: 'InputView',
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
      required: false,
    },
    type: {
      type: String as PropType<Input>,
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
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
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
