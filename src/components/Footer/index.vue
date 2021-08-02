<template>
  <footer class="site-footer" role="contentinfo">
    <div class="wrapper d-lg-flex flex-justify-between flex-items-center">
      <div class="site-footer__brand">
        <img src="../../assets/images/Microsoft-icon-white.svg" alt="Microsoft icon"/>
        <p>纳新系统</p>
      </div>

      <ul>
        <li>
          <a href="https://aka.ms/opensource"
             onclick="return confirm('Are you sure you want to continue to https://aka.ms/opensource? This resource is restricted to Microsoft employees to share guidance and documentation about open source at Microsoft.\n\nIf you continue, you will be redirected to authenticate with Azure Active Directory, and the error messages may be confusing if you are not able to sign-in.')">Employee
            sign-in</a>
        </li>
        <li>
          <a href="https://careers.microsoft.com/us/en/search-results?keywords=open%20source" target="_new">Jobs</a>
        </li>
        <li>
          <a href="https://cloudblogs.microsoft.com/opensource" target="_new">Blog</a>
        </li>
        <li>
          <a href="{{ '/codeofconduct/' | relative_url }}">Code of Conduct</a>
        </li>
        <li>
          <a href="https://privacy.microsoft.com/en-us/privacystatement" target="_blank">Privacy & Cookies</a>
        </li>
        <li id="manageCookies" data-require-javascript="yes" data-javascript-show="immediate">
          <a href="#" onclick="manageCookies()">Manage Cookies</a>
        </li>
        <li>
          <a href="https://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx" target="_blank">Terms</a>
        </li>
        <li>
          <a href="https://www.microsoft.com/trademarks" target="_blank">Trademarks</a>
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
