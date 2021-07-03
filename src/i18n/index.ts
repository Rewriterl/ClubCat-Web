import { createI18n } from 'vue-i18n'

import nativeZhMessage from './lang/zh'
import elementZhMessage from 'element-plus/lib/locale/lang/zh-cn'

const messages = {
  zh: {
    ...nativeZhMessage,
    ...elementZhMessage,
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  messages,
})

export default i18n
