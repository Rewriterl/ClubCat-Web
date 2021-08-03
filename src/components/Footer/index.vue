<template>
  <footer class="site-footer" role="contentinfo">
    <div class="wrapper d-lg-flex flex-justify-between flex-items-center">
      <div class="site-footer__brand">
        <img src="../../assets/images/Microsoft-icon-white.svg" alt="Microsoft icon"/>
        <p>纳新系统</p>
      </div>

      <ul>
        <li>
          <a href="https://cloudblogs.microsoft.com/opensource" target="_new">Blog</a>
        </li>
        <li>
          <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank">Privacy & Cookies</a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx" target="_blank">Terms</a>
        </li>
        <li>
          <p>© <span id="year">{{ date }}</span> 42Team</p>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
import {defineComponent, reactive} from "vue";

export default defineComponent({
  name: "Footer",
  setup() {
    let date = reactive(new Date().getFullYear())
    return {
      date
    }
  }
})
</script>
