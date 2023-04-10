<template>
  <input :id="id" v-model="value" :type="type" :name="name" :placeholder="placeholder" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const inputTypes: string[] = ['text', 'checkbox', 'email', 'password'];

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
    type: {
      type: String,
      required: true,
      default: 'text',
      validator: (value: string) => inputTypes.includes(value),
    },
  },
  data() {
    return {
      value: '',
    };
  },
});
</script>
