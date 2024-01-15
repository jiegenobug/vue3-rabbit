import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 导入懒加载插件
import { lazyPlugin } from './directives'

import App from './App.vue'
import router from './router'

const app = createApp(App)
// 注册懒加载插件
app.use(lazyPlugin)

app.use(createPinia())
app.use(router)

app.mount('#app')
