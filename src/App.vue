<template>
  <Menu/>
  <template v-for="club in state.clubs">
    <Card :name="club.clubName"
          :introduction="club.clubIntroduction"
    />
  </template>
</template>

<script>
import {defineComponent, reactive} from 'vue'
import axios from "./util/axios.js";
import Menu from './components/Menu/index.vue'
import Card from './components/Card/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Menu,
    Card
  },
  setup() {
    const state = reactive({
      clubs: undefined,
      dataCount: 0,
      message: null,
      pageAllNum: 0,
      pageLimit: 0,
      pageNum: 0
    })
    axios.get('http://club.yeefire.cn/api/nobody/v1/club').then((res) => {
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

#menu {
  position: absolute;
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 4vh 2vh 5vh 5vh;
}

#app {
  padding: 15vh 8vh;
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
  //white-space: nowrap;
}
</style>
