<template>
  <img :class="classes" :src="assetsPath" :alt="alt" />
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
    assetName: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },

  data(): { assetsPath: string } {
    return {
      assetsPath: require('../../../assets/' + this.assetName),
    };
  },
});
</script>
