<template>
  <div class="navbar">
    <!--    这里根据label选中复选框-->
    <input type="checkbox" name="" id="nav">
    <label for="nav"></label>
    <div class="logo">ClubCat</div>
    <ul>
<!--      <li><a href="javascript:void 0;">首页</a></li>-->
      <li><a href="javascript:void 0;">我的社团</a></li>
      <li><a href="javascript:void 0;">个人信息</a></li>
    </ul>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>

</style>
