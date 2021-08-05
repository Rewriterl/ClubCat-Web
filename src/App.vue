<template>
  <Header/>
  <main id="content" class="main page-content" aria-label="Content">
    <article>
      <router-view></router-view>
    </article>
  </main>
  <Footer/>
</template>

<script>
import { defineComponent } from 'vue'
import Header from './components/Header/index.vue'
import Footer from './components/Footer/index.vue'
import './assets/css/index.css'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer
  },
  setup () {
  }
})
</script>
