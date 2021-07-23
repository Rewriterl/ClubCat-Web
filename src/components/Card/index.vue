<template>
  <div class="card-container" ref="containerRef">
    <div class="content">
      <p class="title text-ellipsis">{{ name }}</p>
      <div class="card text-ellipsis">{{ introduction }}</div>
    </div>
  </div>
</template>

<!-- TODO:项目基本完成后尝试使用vue3实验特性setup-->
<!--suppress JSUnusedGlobalSymbols -->
<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'Card',
  props: [
    'name',
    'introduction'
  ]
})

</script>

<!--suppress CssUnresolvedCustomProperty -->
<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  //margin: 12vh -5vh 5vw 7vw;
}

.content {
  height: 25vh;
  width: 15vw;
  margin-right: 2vw;
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 最外层设置为3D */
  //transform-style: preserve-3d;
  //transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: all 0.1s;
  //flex-wrap: wrap;
  cursor: pointer;
}

.content:hover {
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.2), 0 0 0 rgba(255, 255, 255, 0.8),
  inset 18px 18px 30px rgba(0, 0, 0, 0.1),
  inset -18px -18px 30px rgba(255, 255, 255, 1);
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
  /* card 的z轴偏移量 */
  transform: translateZ(40px);
}
.lock {
  width: 30px;
  height: 30px;
  border: 1px #999 solid;
  border-radius: 50%;
}
.panel div {
  padding: 0 20px;
}
</style>
