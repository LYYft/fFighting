/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-09 23:09:40
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2023-12-11 23:05:28
 * @FilePath: \SXprogram\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/LayoutRent.vue'
import Upload from '@/views/upload/UploadRent.vue'
import Collect from '@/views/collect/CollectRent.vue'
import Prime from '@/views/prime/PrimeRent.vue'
import BicycleDetail from '@/views/prime/detail/BicycleDetail.vue'
import EarphoneDetail from '@/views/prime/detail/EarphoneDetail.vue'
import LaptopDetail from '@/views/prime/detail/LaptopDetail.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: 'prime',
      children: [
        {
          path: 'upload',
          name: 'upload',
          component: Upload
        },
        {
          path: 'collect',
          name: 'collect',
          component: Collect
        },
        {
          path: 'prime',
          name: 'prime',
          component: Prime
        },
        {
          path: 'bicycleDetail',
          name: 'bicycleDetail',
          component: BicycleDetail
        },
        {
          path: 'earphoneDetail',
          name: 'earphoneDetail',
          component: EarphoneDetail
        },
        {
          path: 'laptopDetail',
          name: 'laptopDetail',
          component: LaptopDetail
        }
      ]
    }
    
  ]
})

export default router
