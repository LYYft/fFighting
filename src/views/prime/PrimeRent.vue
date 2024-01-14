<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:59:04
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-07 14:16:24
 * @FilePath: \SXprogram\src\views\prime\PrimeRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:59:04
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2023-12-11 22:38:35
 * @FilePath: \SXprogram\src\views\prime\PrimeRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import mitt from '@/utils/event-bus.js'
var goods = ref([
  {id: 1,type: 'earphone',img: "src/assets/image/earphone2.png",name: '耳机',price: 80,iconColor: 'skyblue' },
  {id: 2,type: 'earphone',img: "src/assets/image/earphone1.png",name: '耳机',price: '50',iconColor: 'skyblue' },
  {id: 3,type: 'iphone',img: "src/assets/image/iphone.png",name: 'iphone',price: '3000',iconColor: 'skyblue' },
  {id: 4,type: 'laptop',img: "src/assets/image/laptop.png",name: '笔记本',price: '500',iconColor: 'skyblue' },
  {id: 5,type: 'bicycle',img: "src/assets/image/bicycle.png",name: '自行车',price: '30',iconColor: 'skyblue' },
  {id: 6,type: 'laptop',img: "src/assets/image/laptop1.png",name: 'Dell',price: '500',iconColor: 'skyblue' },
  {id: 7,type: 'laptop',img: "src/assets/image/huawei.png",name: '华为',price: '1000',iconColor: 'skyblue' },
  {id: 8,img: "",name: '',price: '',iconColor: 'skyblue' },
  {id: 9,img: "",name: '',price: '',iconColor: 'skyblue' },
  {id: 10,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 11,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 12,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 13,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 14,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 15,img: '',name: '',price: '',iconColor: 'skyblue' },
  {id: 16,img: '',name: '',price: '',iconColor: 'skyblue' },
])
//跳转详情页
const router = useRouter()
var toDetail = (item) => {
  switch(item.type)
  {
    case 'bicycle':
      router.push('/bicycleDetail');
      break;
    case 'earphone':
      router.push({
        path: '/earphoneDetail',
        query: {
          image: `${item.img}`
        }
      });
      break;
    case 'laptop':
      router.push('/laptopDetail');
      mitt.emit('sentLaptop',item);
      break;
  }
}

//另一种跳转详情页方式

</script>

<template>
  <div class="prime" >
    <div class="goods" v-for="item in goods" :key="item.id" @click="toDetail(item)">
      <el-icon class="icon" :color="item.iconColor" @click.stop="item.iconColor = item.iconColor == 'skyblue' ? 'red' : 'skyblue'"><Star></Star></el-icon>
      <div id="image">
      <img :src=item.img>
      </div>
      <p><a>{{ item.name }}</a></p>
      <p>￥{{ item.price }}/月起</p>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
.prime {
    width: 100%;
    height: 630px;
    padding: 10px 0 0 10px;
    background-color: #f5f6fa;
    overflow-y: auto;
    overflow-x: hidden;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-between;
    .goods {
      width: 200px;
      height: 300px;
      margin-right: 8px;
      margin-bottom: 10px;
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      float: left;
      position: relative;
      cursor: pointer;
      .icon {
        position: absolute;
        top: 3px;
        right: 3px;
        font-size: 20px;
      }
      #image {
        width: 200px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img {
        width: 200px;
      }
      }
      a:hover {
        color: skyblue;
      }
    }
}
</style>