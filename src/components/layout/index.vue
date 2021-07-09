<template>
  <div
    :class="wrapperClass"
    class="app-wrapper"
  >
    <app-navbar />
    <app-sidebar />
    <div class="app-main-wrapper">
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useEnhancer } from '@/enhancers'
import AppMain from './AppMain/index.vue'
import AppNavbar from './AppNavbar/index.vue'
import AppSidebar from './AppSidebar/index.vue'

export default defineComponent({
  name: 'Layout',

  components: {
    AppMain,
    AppNavbar,
    AppSidebar,
  },

  setup () {
    const { store } = useEnhancer()

    const wrapperClass = computed(() => ({
      'is-sidebar-open': store.getters.sidebar.isOpen,
      'is-sidebar-close': !store.getters.sidebar.isOpen,
    }))

    return {
      wrapperClass,
    }
  },
})
</script>
