<template>
  <input
    :id="id"
    v-model="value"
    type="text"
    :name="name"
    :placeholder="placeholder"
    :disabled="disabled"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
  },
  data(): { value: string } {
    return {
      value: '',
    };
  },
});
</script>
