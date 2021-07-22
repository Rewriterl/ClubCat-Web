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

<style lang="scss" scoped>
/* vh:相对单位，view height 指视口单位的1% */
/* justify-content 定义了浏览器之间如何分顺着弹性容器主轴或网格行轴的元素之间机器周围的空间
   center 表示伸缩元素向每行中点片列。每行第一个元素到行首的距离将与每行最后一个元素到行尾的距离相同
*/
body,
.navbar,
.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar {
  position: relative;
  padding: 1.2rem;
  border-radius: 50px;
  background-color: #fff;
}

.navbar input {
  width: 40px;
  height: 40px;
  /* 鼠标移入时变手 */
  cursor: pointer;
  /* 设置复选框透明 */
  opacity: 0;
}

.navbar span {
  position: absolute;
  left: 25px;
  /* 使用计算属性先确定50%的位置再减少10px */
  top: calc(50% - 10px);
  width: 30px;
  height: 4px;
  border-radius: 15px;
  background-color: #999;
  /* 当鼠标会误点span导致无法正确勾选多选框 */
  pointer-events: none;
  transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
}

.navbar span:nth-child(3) {
  top: calc(50% + 6px);
}

.navbar ul {
  width: 0;
  overflow: hidden;
  /* 当宽度不够时文字会换行显示，而文字换行之后又会撑大盒子，所以需要让文字不换行 */
  white-space: nowrap;
  transition: all 0.5s;
}

.navbar ul li {
  list-style: none;
  /* 正常顺序是上下左右，两个参数时是上下、左右，三个参数时是上、左右、下 */
  margin: 0 15px;
}

.navbar ul li a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  color: #333;
}

.navbar ul li a:hover {
  color: rgba(255, 153, 153, 0.92);
}

.navbar input:checked ~ ul {
  /* 一般都是只定义宽度，高会被自动顶出来 */
  width: 350px;
}

.navbar input:checked ~ span:nth-child(2) {
  top: calc(50% - 2px);
  transform: rotate(-45deg);
  background-color: rgba(255, 153, 153, 0.88);
  /* 先修改top然后旋转角度，并添加一定的延迟与淡入淡出效果 */
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}

.navbar input:checked ~ span:nth-child(3) {
  top: calc(50% - 2px);
  transform: rotate(45deg);
  background-color: rgba(255, 153, 153, 0.88);
  transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
}
</style>
