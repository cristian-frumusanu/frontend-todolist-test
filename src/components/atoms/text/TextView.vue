<template>
  <component :is="tag" :class="classes">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { Text } from '../atoms.types';

export default defineComponent({
  name: 'TextView',
  props: {
    tag: {
      type: String as PropType<Text>,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    classes: {
      type: String,
      required: true,
    },
  },
});
</script>
