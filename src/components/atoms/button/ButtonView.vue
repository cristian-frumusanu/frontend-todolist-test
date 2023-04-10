<template>
  <button v-if="iconName === ''" :type="type">
    {{ text }}
  </button>
  <button v-else :type="type">
    <svg :id="iconName" :fill="iconColor">
      <use :href="assetsPath + '#' + iconName"></use>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export type ButtonType = 'button' | 'submit' | 'reset' | undefined;

export default defineComponent({
  name: 'ButtonView',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      required: true,
      default: 'button',
    },
    text: {
      type: String,
      default: '',
      required: false,
    },
    iconName: {
      type: String,
      default: 'box',
    },
    iconColor: {
      type: String,
      default: '#000000',
    },
  },
  data() {
    return {
      assetsPath: require('../../../assets/sprite.svg'),
    };
  },
});
</script>
