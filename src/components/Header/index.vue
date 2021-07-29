<template>
  <header id="site-header" role="banner">
    <div class="site-header__inner">
      <div class="site-logo">
        <a href="#" tabindex="2">
          <img src="../../assets/images/Microsoft-Open-Source-logo.svg" alt="ClubCat">
          <span class="sr-only">回到首页</span>
        </a>
      </div>
      <ul class="site-header__nav">
        <li class="is-active" aria-current="page">我的社团</li>
        <li class="is-active" aria-current="page">个人中心</li>
        <li>
          <a class="external"
             target="_new"
             href="#">
            <span>42下载站</span>
          </a>
        </li>
        <li>
          <a class="external"
             target="_new"
             href="#">
            <span>Blog</span>
          </a>
        </li>
      </ul>
      <div class="site-header__utilities">
        <div class="site-header__search">
          <form class="search-form" role="search" action="#" method="GET">
            <label for="header-search">
              <span class="sr-only">搜索社团</span>
            </label>
            <input type="text" id="header-search" name="q" placeholder="搜索">
          </form>
          <div class="search-trigger"></div>
        </div>
        <div class="nav-trigger js-menu-trigger">
          <img class="open-menu" src="../../assets/images/svgs/menu.svg" alt="打开菜单">
          <img class="close-menu" src="../../assets/images/svgs/close.svg" alt="关闭菜单">
        </div>
        <a class="sign-in" href="#">
          <span>Sign In</span>
          <span class="account-img"></span>
        </a>
      </div>
    </div>
  </header>
  <!-- 移动端 -->
  <nav id="navigation">
    <div class="site-navigation">
      <div>
        <ul class="main-nav">
          <li>
            <form class="search-form" role="search" action="#" method="GET">
              <label>
                <span class="sr-only">Search projects</span>
              </label>
              <input id="search" type="text" name="q" placeholder="Search"/>
            </form>
          </li>
          <li>
            <a class="is-active" href="#">首页</a>
          </li>
          <li>
            <a class="" href="#">我的社团</a>
          </li>
          <li>
            <a class="" href="#">个人中心</a>
          </li>
          <li>
            <a class="external"
               target="_new"
               href="#">
              <span>42下载站</span>
            </a>
          </li>
          <li>
            <a class="external" href="#" target="_new">
              <span>Blog</span>
            </a>
          </li>
          <li>
            <p>&nbsp;</p>
          </li>
          <li>
            <a class="sign-in" href="#">
              <span>Sign In</span>
              <span class="account-img"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <span class="navigation-screen js-menu-trigger"></span>
  </nav>

  <div class="search-form-mobile">
    <form class="search-form" role="search" action="#" method="GET">
      <label>
        <span class="sr-only">Search projects</span>
      </label>
      <input id="mobile-search" type="text" name="q" placeholder="Search" />
    </form>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'Header'
})
</script>

<style scoped>

</style>
