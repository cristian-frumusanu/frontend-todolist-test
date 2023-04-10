<template>
  <input
    :id="id"
    :checked="checked"
    type="checkbox"
    :name="name"
    class="w-5 h-5 appearance-none border border-sky-800 rounded-sm checked:bg-cyan-500 checked:p-2"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CheckboxView',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
});
</script>
