<template>
  <div class="card-container" @mousemove="getMouseLocal" ref="containerRef">
    <div class="content" :style="{ '--rx': rx, '--ry': ry }">
      <p class="title">{{ name }}</p>
      <!--      <p class="title">{{ moto }}</p>-->
      <div class="card">{{ introduction }}</div>
      <div class="lock"></div>
    </div>
  </div>
</template>

<!-- TODO:项目基本完成后尝试使用vue3实验特性setup-->
<!--suppress JSUnusedGlobalSymbols -->
<script>
import {defineComponent, reactive, ref, onMounted} from "vue";

export default defineComponent({
  name: 'Card',
  props: [
    'name',
    // 'moto',
    'introduction'
  ],
  setup() {
    const size = reactive({width: 0, height: 0}); //鼠标交互有效区域大小
    const containerRef = ref(null); // 有效dom节点中的ref
// 获取 鼠标交互部分的范围
    onMounted(() => {
      const {width, height} = containerRef.value.getBoundingClientRect();
      size.width = width;
      size.height = height;
    });
// 鼠标坐标
    const mx = ref(0);
    const my = ref(0);
// rotate 参数
    const rx = ref(0);
    const ry = ref(0);

// 鼠标移动时执行
    function getMouseLocal(e) {
      const {width, height} = size; //有效区域大小
      const {x, y} = e; //鼠标位置
      const degR = 16; //摆动幅度
      ry.value = (x / (width / (degR * 2)) - degR).toFixed(1) + "deg";
      rx.value = (degR - y / (height / (degR * 2))).toFixed(1) + "deg";
      mx.value = x;
      my.value = y;
    }

    return {
      size,
      containerRef,
      ry,
      rx,
      mx,
      my,
      getMouseLocal
    }
  }
})

</script>

<!--suppress CssUnresolvedCustomProperty -->
<style lang="scss" scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12vh -5vh 32vw 8vw;
}

.content {
  width: 220px;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 6px 6px 12px #d1d9e6, -6px -6px 12px rgba(255, 255, 255, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* 最外层设置为3D */
  transform-style: preserve-3d;
  transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: all 0.1s;
}
.title {
  margin: 0;
  font-size: 20px;
  text-align: center;
  color: #666;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.card {
  width: 80%;
  height: 80px;
  border-radius: 20px;
  margin: 10px 0 20px 0;
  padding: 20px;
  color: #fff;
  font-size: 16px;
  display: flex;
  align-items: center;
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
