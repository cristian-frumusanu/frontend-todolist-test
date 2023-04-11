<template>
  <button :type="type" @click="onClick">
    <svg v-if="iconName" :id="iconName" :fill="iconColor" :class="classes">
      <use :href="assetsPath + '#' + iconName"></use>
    </svg>
    {{ text }}
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
      default: '',
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
