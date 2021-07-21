<template>
  <div class="container" @mousemove="getMouseLocal" ref="this.containerRef">
    <div class="content" :style="{'--rx':rx,'--ry':ry}">
      <p class="title">Hold Near</p>
      <p class="title">Reader to Play</p>
      <div class="card">***********</div>
      <div class="lock"></div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  onMounted
} from "vue";
// 鼠标交互有效区域大小
const size = reactive({
  width: 0,
  height: 0
})
// 有效dom节点的ref
const containerRef = ref(null)

export default defineComponent({
  name: "Card",
  components: {},
  setup() {
// 获取 鼠标交互部分的范围
    onMounted(function () {
      // const {width, height} = containerRef.value.getBoundingClientRect();
      // size.width = width;
      // size.height = height;
    });

    // 鼠标坐标
    const mx = ref(0);
    const my = ref(0);
    // rotate 参数
    const rx = ref(0);
    const ry = ref(0);

    function getMouseLocal(e) {
      // const {width, height} = size
      // // 获取鼠标位置
      // const {x, y} = e
      // const degR = 16
      // ry.value = (x / (width / (degR * 2)) - defR).toFixed(1) + 'deg'
      // rx.value = (degR - y / (height / (degR * 2))).toFixed(1) + 'deg'
      // mx.value = x
      // my.value = y
    }

    return {
      size, mx, my, rx, ry, getMouseLocal
    }
  },

})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #efefef;
  width: 100%;
  height: 100%;
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
  // 最外层设置为3D
  transform-style: preserve-3d;
  transform: rotateX(var(--rx)) rotateY(var(--ry));
  transition: all 0.1s;
}

.title {
  margin: 0px;
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

.panel {
  position: fixed;
  bottom: 20px;
  left: 20px;
  text-align: start;
  color: #444;
  font-size: 12px;
}

.panel div {
  padding: 0 20px;
}

.controlPanel {
  color: #86a8e7;
  cursor: pointer;
  margin: 20px;
}
</style>
