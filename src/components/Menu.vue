<template>
    <div class="menu">
      <button class="menu_btn" @click="toggleMenu"><font-awesome-icon icon="fa-solid fa-bars" /></button>

      <div class="menu_list" v-show="isOpen">
        <router-link :to="{name: 'home'}" class="menu_list_item">ひろばへいく</router-link>
        <router-link :to="{name: 'new'}" class="menu_list_item">つくる</router-link>
        <router-link :to="{name: 'creatures'}" class="menu_list_item">めいぼをみる</router-link>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Menu',
  props: {},
  setup() {
    const isOpen = ref(false);
    const toggleMenu = () => {
      isOpen.value = !isOpen.value;
    }
    return {isOpen, toggleMenu}
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/scss/_settings.scss';

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    padding: 10px 10px 0;

    &_btn {
      margin-left: auto;
      display: block;
      width: 30px;
      height: 30px;
      text-align: center;
      font-size: 16px;
      border-radius: 50%;
      background: rgba(0,0,0, .8);
      backdrop-filter: blur(3px);
      box-shadow: 0 0 5px rgba(0, 0, 0, .6);
    }
    &_list {
      margin: 10px 0 0 auto;
      width: 200px;
      padding: 10px 20px;
      background: rgba(0,0,0, .8);
      backdrop-filter: blur(3px);
      box-shadow: 0 0 5px rgba(0, 0, 0, .6);
      border-radius: 8px;

      &_item {
        display: block;
        font-size: 16px;
        line-height: 1.6;
      }
    }
  }
</style>