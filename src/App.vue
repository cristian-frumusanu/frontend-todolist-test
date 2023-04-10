<template>
  <div
    id="app"
    class="min-h-screen antialiased text-gray-900 flex flex-col items-center justify-between"
  >
    <header-view />
    <home-view />
    <footer-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderView from './components/header/HeaderView.vue';
import FooterView from './components/footer/FooterView.vue';
import HomeView from './views/HomeView.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView,
    HomeView,
    FooterView,
  },
});
</script>

<style src="./index.css"></style>
