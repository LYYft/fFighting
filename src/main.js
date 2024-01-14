/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-09 23:09:40
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2023-11-12 16:57:55
 * @FilePath: \SXprogram\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
