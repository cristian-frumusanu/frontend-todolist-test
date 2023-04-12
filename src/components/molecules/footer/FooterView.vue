<template>
  <footer>
    <text-view tag="p" classes="text-[calc(.5em+.5vw)]" text="2023 - Elena Lukashova x DriveK" />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextView from '../../atoms/text/TextView.vue';

export default defineComponent({
  name: 'FooterView',
  components: {
    TextView,
  },
});
</script>
