<template>
  <Header/>
  <main>
      <Card/>
  </main>
  <Footer/>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import Header from './components/Header/index.vue'
import Card from './components/Card/index.vue'
import Footer from './components/Footer/index.vue'
import './assets/css/index.css'

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
#app {
  //display: flex;
  //flex-wrap: wrap;
  //align-content: start;
  //justify-content: center;
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  //-moz-osx-font-smoothing: grayscale;
  //text-align: center;
}

</style>
