<template>
  <div class="masonry" v-for="club in state.clubs">
    <div class="card-container" ref="containerRef">
      <div class="content">
        <p class="title text-ellipsis">{{ club.clubName }}</p>
        <div class="card text-ellipsis">{{ club.clubIntroduction }}</div>
      </div>
    </div>
  </div>
</template>

<!-- TODO:项目基本完成后尝试使用vue3实验特性setup-->
<!--suppress JSUnusedGlobalSymbols -->
<script>
import {defineComponent, reactive} from "vue";
import axios from '../../util/axios.js';

export default defineComponent({
  name: 'Card',
  setup() {
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
    return {state}
  }
})

</script>

<!--suppress CssUnresolvedCustomProperty -->
<style lang="scss" scoped>
.masonry {
  display: flex;
  flex-direction: row;
}
.card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2vh;
}
.content {
  height: 25vh;
  width: 15vw;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.1s;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
    inset 18px 18px 30px rgba(0, 0, 0, 0.1),
    inset -18px -18px 30px rgba(255, 255, 255, 1);
  }
}
.title {
  margin: 0.7vh;
  font-size: 20px;
  text-align: center;
  color: #666;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.card {
  width: 80%;
  height: 12vh;
  border-radius: 20px;
  margin: 20px 0 20px 0;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(-20deg, #91eae4, #86a8e7, #7f7fd5);
}
</style>
