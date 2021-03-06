import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/style.scss'
import '@/icons'
import ElementPlus from 'element-plus'
import components from '@/components/common'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(i18n)
app.use(ElementPlus)
app.use(components)

router.isReady().then(() => app.mount('#app'))
