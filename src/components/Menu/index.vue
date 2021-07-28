<template>
  <teleport to="body">
    <div id="menu">
      <div class="navbar">
        <input type="checkbox">
        <span></span>
        <span></span>
        <ul>
          <li><a href='javascript:void(0)'>首页</a></li>
          <li><a href='javascript:void(0)'>我的社团</a></li>
          <li><a href='javascript:void(0)'>个人中心</a></li>
        </ul>
      </div>
    </div>
  </teleport>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Menu",
  components: {},
})
</script>

<style scoped>

</style>
