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
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.4);
  input {
    width: 40px;
    height: 40px;
    cursor: pointer;
    opacity: 0;
    &:checked {
      & ~ ul {
        width: 18rem;
      }
      & ~ span {
        &:nth-child(2) {
          top: calc(50% - 2px);
          transform: rotate(-45deg);
          background-color: rgba(153, 202, 255, 0.88);
          transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
        }
        &:nth-child(3) {
          top: calc(50% - 2px);
          transform: rotate(45deg);
          background-color: rgba(153, 202, 255, 0.88);
          transition: top 0.3s ease-in-out, transform 0.3s ease-in-out 0.3s;
        }
      }
    }
  }
  span {
    position: absolute;
    left: 25px;
    top: calc(50% - 10px);
    width: 30px;
    height: 4px;
    border-radius: 15px;
    background-color: #999;
    pointer-events: none;
    transition: transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s;
    &:nth-child(3) {
      top: calc(50% + 6px);
    }
  }
  ul {
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: all 0.5s;
    li {
      list-style: none;
      margin: 0 15px;
      a {
        text-decoration: none;
        font-size: 20px;
        font-weight: 700;
        color: #333;
        &:hover {
          color: rgba(255, 153, 153, 0.92);
        }
      }
    }
  }
}
</style>
