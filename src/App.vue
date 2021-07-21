<template>
  <Menu/>
  <Card/>
</template>

<script>
import {defineComponent} from 'vue'
import Menu from './components/Menu/index.vue'
import Card from './components/Card/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu,
    Card
  }
})
</script>

<style lang="scss">
/* 清除浏览器内置样式，大坑。默认值为20px */
* {
  padding: 0;
  margin: 0;
}

body {
  // 铺满全屏
  height: 100vh;
  background: linear-gradient(#99f, #f99);
}

#menu {
  display: flex;
  justify-content: left;
  align-items: center;
}

// 项目自带
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
