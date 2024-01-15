import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// 检测元素是否进入视口区域
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 定义自定义指令图片懒加载
app.directive('img-lazy', {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          el.src = binding.value
        }
      },
    )
  }
})