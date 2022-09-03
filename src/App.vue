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
}
</style>
