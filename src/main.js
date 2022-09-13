import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/styles/index.scss'
import dayjs from 'dayjs'
import store from './store'
import *as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const app = createApp(App)

// 注册Icons 全局组件
Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key])
  })

  // 绑定实例
app.config.globalProperties.$echarts = echarts 


app.use(router)
app.use(store)
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
app.use(store)
app.config.globalProperties.day = dayjs//全局挂载

