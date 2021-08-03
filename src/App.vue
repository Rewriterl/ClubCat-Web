<template>
  <Header/>
  <Main/>
  <Footer/>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import Main from './components/Main/index.vue'
import './assets/css/index.css'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  setup() {
  }
})
</script>
