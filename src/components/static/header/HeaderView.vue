<template>
  <header class="flex items-center p-3">
    <img
      class="w-[calc(6em+6vw)] mt-5 max-md:mt-3 max-sm:mt-2"
      src="../../../assets/logo.png"
      alt="logo do your best"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderView',
});
</script>
