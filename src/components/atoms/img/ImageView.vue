<template>
  <img :class="classes" :src="src" :alt="alt" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageView',
  props: {
    classes: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      default: '../../../assets/logo.png',
      required: false,
    },
    alt: {
      type: String,
      required: true,
    },
  },
});
</script>
