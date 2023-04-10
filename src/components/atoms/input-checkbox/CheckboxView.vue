<template>
  <input :id="id" :checked="checked" type="checkbox" :name="name" />
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
