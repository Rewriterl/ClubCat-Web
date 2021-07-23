<template>
  <!--  <Menu/>-->
  <Header/>
  <main>
      <Card/>
  </main>
  <Footer/>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import Header from './components/Header/index.vue'
// import Menu from './components/Menu/index.vue'
import Card from './components/Card/index.vue'
import Footer from './components/Footer/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    // Menu,
    Card,
    Footer
  },
  setup() {
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
  display: flex;
  // 铺满全屏
  height: 100vh;
  background: #e0eaf7;
}

main {
  display: flex;
  flex-wrap: wrap;
  min-height: calc(100vh - 4vh - 100px);
  justify-content: space-around;
}

#menu {
  position: absolute;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 4vh 2vh 5vh 5vh;
}

#app {
  display: flex;
  flex-wrap: wrap;
  align-content: start;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
