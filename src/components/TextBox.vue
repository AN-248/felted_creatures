<template>
<div class="textBox">
    <p class="textBox_name">{{ name }}</p>
    <span></span>
</div>
</template>

<script>
export default {
  name: 'TextBox',
  props: { 
    name: '???',
    texts: Array,
    options: Object
  }
}
</script>

<style lang="scss" scoped>
.textBox {
    width: 95%;
    max-width: 600px;
    height: 100px;
    position: fixed;
    bottom: 10px;
    right: 50%;
    transform: translateX(50%);
    background: rgba(0,0,0, .8);
    backdrop-filter: blur(3px);
    box-shadow: 0 0 5px rgba(0, 0, 0, .6);
    border-radius: 8px;
}

</style>