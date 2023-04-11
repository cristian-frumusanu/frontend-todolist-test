<template>
  <button :type="type" :class="parentClasses" @click="onClick">
    {{ text }}
    <svg v-if="iconName" :id="iconName" :fill="iconColor" :class="svgClasses">
      <use :href="assetsPath + '#' + iconName"></use>
    </svg>
  </button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { Button } from '../atoms.types';

export default defineComponent({
  name: 'ButtonView',
  props: {
    type: {
      type: String as PropType<Button>,
      required: false,
      default: 'button',
    },
    text: {
      type: String,
      default: '',
      required: false,
    },
    iconName: {
      type: String,
      default: '',
    },
    iconColor: {
      type: String,
      default: '#000000',
    },
    svgClasses: {
      type: String,
      default: 'w-6 h-6',
      required: false,
    },
    parentClasses: {
      type: String,
      default: '',
      required: false,
    },
    onClick: {
      type: Function as PropType<(payload: MouseEvent) => void>,
      default: () => {},
    },
  },
  data() {
    return {
      assetsPath: require('../../../assets/sprite.svg'),
    };
  },
});
</script>
