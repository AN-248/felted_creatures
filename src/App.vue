<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="scss">
@import './assets/scss/destyle.css';
@import './assets/scss/_settings.scss';

* {
  font-family: 'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','Yu Gothic UI',sans-serif;
  color: #FFF;
  font-weight: bold;
}

body {
  background: linear-gradient(to top, #222, #000);
  width: 100%;
  height: 100vh;
  position: relative;
}
</style>
