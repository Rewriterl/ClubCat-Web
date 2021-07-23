<template>
  <footer class="inline">Footer</footer>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Footer"
})
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height: 4vh;
}
</style>
