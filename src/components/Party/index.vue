<template>
  <article>
    Router of Party
  </article>
  <!--  <div class="masonry" v-for="club in state.clubs">-->
  <!--    <div class="card-container" ref="containerRef">-->
  <!--      <div class="content">-->
  <!--        <p class="title text-ellipsis">{{ club.clubName }}</p>-->
  <!--        <div class="card text-ellipsis">{{ club.clubIntroduction }}</div>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<!-- TODO:项目基本完成后尝试使用vue3实验特性setup-->
<!--suppress JSUnusedGlobalSymbols -->
<script>
import {defineComponent, reactive} from "vue";
import axios from '../../util/axios.js';

export default defineComponent({
  name: 'Party',
  // setup() {
  //   const state = reactive({
  //     clubs: undefined,
  //     dataCount: 0,
  //     message: null,
  //     pageAllNum: 0,
  //     pageLimit: 0,
  //     pageNum: 0
  //   })
  //   axios.get('/api/nobody/v1/club').then((res) => {
  //     state.clubs = res.data
  //     state.dataCount = res.dataCount
  //     state.message = res.message
  //     state.pageAllNum = res.pageAllNum
  //     state.pageLimit = res.pageLimit
  //     state.pageNum = res.pageNum
  //   })
  //   return {state}
  // }
})

</script>

<!--suppress CssUnresolvedCustomProperty -->
<style scoped>

</style>
