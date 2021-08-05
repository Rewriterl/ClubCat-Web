<template>
  <div class="wrapper pt-6 pb-4 mt-6 mb-4">
    <div class="text-center mb-6" data-animate-in="up" data-animate-in-delay="200">
      <h2 class="h3">社团列表</h2>
    </div>
    <div class="tile-list in-view" data-animate-in="up" data-animate-in-delay="400" style="transition-delay: 0.4s;">
      <a v-for="club in state.clubs" :key="club.clubID" class="tile" href="#" target="_blank" rel="noopener">
        <div>
          <img class="mb-4" :src="club.clubAvatar" alt="头像"/>
          <h3 class="h4 text-brand font-weight-600 mb-3">{{ club.clubName }}</h3>
          <p>{{ club.clubIntroduction }}</p>
        </div>
      </a>
    </div>
    <div class="text-center mt-6 pb-6">
      <a class="link-arrow text-brand" href="#">查看更多社团</a>
    </div>
  </div>
</template>

<!-- TODO:项目基本完成后尝试使用vue3实验特性setup-->
<!--suppress JSUnusedGlobalSymbols -->
<script>
import { defineComponent, reactive } from 'vue'
import axios from '../../util/axios.js'

export default defineComponent({
  name: 'Party',
  setup () {
    const state = reactive({
      clubs: undefined,
      dataCount: 0,
      message: null,
      pageAllNum: 0,
      pageLimit: 0,
      pageNum: 0
    })
    axios.get('/api/nobody/v1/club').then((res) => {
      state.clubs = res.data
      state.dataCount = res.dataCount
      state.message = res.message
      state.pageAllNum = res.pageAllNum
      state.pageLimit = res.pageLimit
      state.pageNum = res.pageNum
    })
    return { state }
  }
})

</script>

<!--suppress CssUnresolvedCustomProperty -->
<style scoped>

</style>
