<template>
  <header class="flex items-center p-3">
    <image-view
      asset-name="logo.png"
      alt="logo do your best"
      classes="w-[calc(6em+6vw)] mt-5 max-md:mt-3 max-sm:mt-2"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ImageView from '../../atoms/img/ImageView.vue';

export default defineComponent({
  name: 'HeaderView',
  components: {
    ImageView,
  },
});
</script>
