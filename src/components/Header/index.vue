<template>
  <div class="navbar">
    <!--    这里根据label选中复选框-->
    <input type="checkbox" name="" id="nav">
    <label for="nav"></label>
    <ul>
      <li><a href="javascript:void 0;">首页</a></li>
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

<style lang="scss" scoped>
.navbar {
  display: flex;
  flex-basis: 100%;
  position: relative;
  width: 100vm;
  height: 100px;
  background-color: #e6f1f9;
  box-shadow: 0 10px 50px #c6d9ed;
}

.navbar input {
  // 跟菜单不一样，这里不需要展示复选框
  display: none;
}

.navbar label {
  position: absolute;
  top: calc(50% - 25px);
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 6px;
  border: 1px solid rgba(198, 217, 0.3);
  background-color: #e6f1f9;
  box-shadow: 5px 3px 6px 1px #c6d9ed,
  -5px -3px 6px 1px #fff;
  cursor: pointer;
  transition: all 0.5s ease-out;
}

.navbar label::before,
.navbar label::after {
  content: "";
  position: absolute;
  left: 5px;
  width: 40px;
  height: 4px;
  border-radius: 4px;
  background-color: #042a41;
  /* 收回来的动画刚好相反 */
  transition: transform 0.3s ease-out, top 0.3s ease-out 0.3s;
}

.navbar label::before {
  top: calc(50% - 10px);
}

.navbar label::after {
  top: calc(50% + 6px);
}

//选中时找最近的下一个label
.navbar input:checked + label {
  box-shadow: 0 0 0 #fff,
  0 0 0 #fff,
  5px 3px 6px 1px #c6d9ed inset,
  -5px -3px 6px 1px #fff inset;
}

.navbar input:checked + label::before {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
}
.navbar input:checked + label::after{
  top: calc(50% - 2px);
  transform: rotate(45deg);
  transition: top 0.3s ease-out, transform 0.3s ease-out 0.3s;
}

// 移动端样式
.navbar ul{
  position: relative;
  z-index: 4;
  top: 100px;
  width: 100%;
  // 默认隐藏移动端样式
  opacity: 0;
  transform: scaleY(0);
  transform-origin: 50% 0;
  transition: all 0.5s ease-out;
}
.navbar ul li{
  height: 66px;
  width: 100%;
  list-style: none;
}
.navbar ul li a{
  display: block;
  width: 100%;
  line-height: 66px;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color:#042a41;
  background-color: #e6f1f9;
  opacity: 0.94;
  box-shadow: 0 15px 20px #c6d9ed;
  transition: all 0.3s ease-out;
}
.navbar ul li a:hover{
  box-shadow: 0 0 0 #fff,
              0 15px 20px #c6d9ed inset;
}
// 选中input后显示菜单
.navbar input:checked ~ ul{
  opacity: 1;
  transform: scaleY(1);
}
// PC端样式，页面大于992时渲染
@media (min-width: 992px) {
  .navbar label{
    display: none;
  }
  .navbar ul{
    // 恢复默认位置，使上面的top不生效
    position: static;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    // 规定显示范围，也可以在上层用padding
    width: 60vw;
    height: 100%;
    margin: 0 auto;
    opacity: 1;
    transform: scaleY(1);
  }
  .navbar ul li{
    text-align: center;
  }
  .navbar ul li a{
    // 还原行内元素，使之前的宽高失效
    display: inline;
    font-size: 22px;
    padding: 20px 40px;
    border-radius: 60px;
    box-shadow: 5px 3px 6px 1px #c6d9ed,
                -5px 3px 6px 1px #fff;
  }
  .navbar ul li a:hover{
    box-shadow: 0 0 0 #fff,
                0 0 0 #fff,
                5px 3px 6px 1px #c6d9ed inset,
                -5px -3px 6px 1px #fff inset;
  }
}
</style>
