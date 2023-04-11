<template>
  <input
    :id="id"
    ref="input"
    :value="value"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
    :class="classes"
    :checked="checked"
    :focus="focus"
    @input="onInput"
    @keyup.enter="onEnter"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { Input, TextInputClass } from '../atoms.types';

export default defineComponent({
  name: 'InputView',
  inheritAttrs: true,
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
      type: [Array, String] as PropType<TextInputClass[] | string>,
      required: true,
    },
    checked: {
      type: Boolean,
      required: false,
      default: false,
    },
    focus: {
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

  watch: {
    disabled(newState: boolean): void {
      if (!newState) {
        this.$nextTick(() => {
          if (this.$refs && this.$refs.input instanceof HTMLInputElement) {
            this.$refs.input.focus();
          }
        });
      }
    },
  },
});
</script>
