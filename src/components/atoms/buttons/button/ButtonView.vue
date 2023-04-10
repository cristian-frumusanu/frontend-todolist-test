<template>
  <button :type="type">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { ButtonType } from '../button.types';

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
  },
  data() {
    return {
      assetsPath: require('../../../assets/sprite.svg'),
    };
  },
});
</script>
