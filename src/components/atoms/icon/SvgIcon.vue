<template>
  <svg :id="iconName" :fill="iconColor">
    <use :href="'assets/sprite.svg#' + iconName"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SvgIcon',

  props: {
    iconName: {
      type: String,
      default: 'box',
    },
    iconColor: {
      type: String,
      default: '#000000',
    },
  },
});
</script>
