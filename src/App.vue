<template>
  <Menu/>
</template>

<script>
import {defineComponent} from 'vue'
import Menu from './components/Menu.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu
  }
})
</script>

<style>
/* 清除浏览器内置样式，大坑默认值为20 */
* {
  padding: 0;
  margin: 0;
}

body {
  height: 100vh;
  background: linear-gradient(#99f, #f99);
  display: flex;
  /*justify-content: center;*/
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
