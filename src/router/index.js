/*
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-09 23:09:40
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-27 21:41:19
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
import BookDetail from '@/views/prime/detail/BookDetail.vue'
import CameraDetail from '@/views/prime/detail/CameraDetail.vue'
import DiandongDetail from '@/views/prime/detail/DiandongDetail.vue'
import PhoneDetail from '@/views/prime/detail/PhoneDetail.vue'

import CycingSort from '@/views/layout/sort/CycingSort.vue'
import ElectronicsSort from '@/views/layout/sort/ElectronicsSort.vue'
import BookSort from '@/views/layout/sort/BookSort.vue'

import BookMessage from '@/views/upload/components/BookMessage.vue'
import BicycleMessage from '@/views/upload/components/BicycleMessage.vue'
import CameraMessage from '@/views/upload/components/CameraMessage.vue'
import DiandongMessage from '@/views/upload/components/DiandongMessage.vue'
import EarphoneMessage from '@/views/upload/components/EarphoneMessage.vue'
import LaptopMessage from '@/views/upload/components/LaptopMessage.vue'
import PhoneMessage from '@/views/upload/components/PhoneMessage.vue'

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
          component: Upload,
          children: [
            {
              path: 'bookMessage',
              component: BookMessage
            },
            {
              path: 'bicycleMessage',
              component: BicycleMessage
            },
            {
              path: 'cameraMessage',
              component: CameraMessage
            },
            {
              path: 'diandongMessage',
              component: DiandongMessage
            },
            {
              path: 'earphoneMessage',
              component: EarphoneMessage
            },
            {
              path: 'laptopMessage',
              component: LaptopMessage
            },
            {
              path: 'phoneMessage',
              component: PhoneMessage
            }
          ]
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
          path: 'bicycleDetail/:id',
          name: '自行车详情',
          component: BicycleDetail
        },
        {
          path: 'earphoneDetail/:id',
          name: '耳机详情',
          component: EarphoneDetail
        },
        {
          path: 'laptopDetail/:id',
          name: '笔记本电脑详情',
          component: LaptopDetail
        },
        {
          path: 'bookDetail/:id',
          name: '书籍详情',
          component: BookDetail
        },
        {
          path: 'cameraDetail/:id',
          name: '照相机详情',
          component: CameraDetail
        },
        {
          path: 'phoneDetail/:id',
          name: '手机详情',
          component: PhoneDetail
        },
        {
          path: 'diandongDetail/:id',
          name: '电动车详情',
          component: DiandongDetail
        },
        {
          path: 'cycling',
          name: '骑行分类',
          component: CycingSort
        },
        {
          path: 'electronics',
          name: '电子产品分类',
          component: ElectronicsSort
        },
        {
          path: 'book',
          name: '书籍分类',
          component: BookSort
        }
      ]
    }
    
  ]
})

export default router
