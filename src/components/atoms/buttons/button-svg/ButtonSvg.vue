<template>
  <button :type="type">
    <svg :id="iconName" :fill="iconColor" :class="classes">
      <use :href="assetsPath + '#' + iconName"></use>
    </svg>
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
    iconName: {
      type: String,
      default: 'box',
    },
    iconColor: {
      type: String,
      default: '#000000',
    },
    classes: {
      type: String,
      default: 'w-12 h-12',
      required: false,
    },
  },
  data() {
    return {
      assetsPath: require('../../../../assets/sprite.svg'),
    };
  },
});
</script>
