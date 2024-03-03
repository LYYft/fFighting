<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:59:04
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-15 14:00:04
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
import { GetBookList } from '../../../api/GoodsRent'
import { IsLikeBooklist } from '../../../api/IsLikeRent'

const booklist = ref([]);

//获取书籍列表
const GetBookMessage = async () => {
  booklist.value = (await GetBookList()).data.data;
}

//跳转详情页
const router = useRouter()
const toDetail = (item) => {
  switch(item.type)
  {
    case 'book':
      router.push(`/bookDetail/${item.id}`);
      break;
  }
}
//渲染商品
GetBookMessage();

//是否收藏
const IsLike = (item) => {
  item.iconColor = item.iconColor == 'skyblue' ? 'red' : 'skyblue';
  IsLikeBooklist(item)
}

</script>

<template>
  <div class="prime">
    <div class="goods" v-for="item in booklist" :key="item.idd" @click="toDetail(item)">
      <el-icon class="icon" :color="item.iconColor" @click.stop="IsLike(item)"><Star></Star></el-icon>
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