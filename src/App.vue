<template>
  <div
    id="app"
    class="w-full min-h-screen grid grid-rows-[80px_1fr_80px] gap-10 space-between place-items-center bg-[url('./assets/background.jpg')] bg-no-repeat bg-cover bg-center-center bg-fixed max-xl:gap-8 max-lg:gap-5 max-md:gap-3 max-sm:gap-2"
  >
    <header-view />
    <home-page />
    <footer-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HeaderView from './components/static/header/HeaderView.vue';
import FooterView from './components/static/footer/FooterView.vue';
import HomePage from './pages/HomePage.vue';
import store from './store/store';

export default Vue.extend({
  name: 'App',
  components: {
    HeaderView,
    HomePage,
    FooterView,
  },
  store: store,
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
});
</script>

<style src="./index.css"></style>
