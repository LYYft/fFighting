<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:59:04
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-15 13:57:36
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
import { onMounted, ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { GetBookList,GetEarList,GetBicycleList,GetCameraList,GetDianDongList,GetLaptopList,GetPhoneList } from '../../api/GoodsRent'
import { IsLikeBooklist,IsLikeBicyclelist,IsLikeCameralist,IsLikeDiandonglist,IsLikeEarlist,IsLikeLaptoplist,IsLikePhonelist } from '../../api/IsLikeRent'
const booklist = ref([]);
const earlist = ref([]);
const laptoplist = ref([]);
const diandonglist = ref([]);
const phonelist = ref([]);
const bicyclelist = ref([]);
const cameralist = ref([]);
const goodslist = ref([])
//获取书籍列表
const GetBookMessage = async () => {
  booklist.value = (await GetBookList()).data.data;
}
//获取耳机列表
const GetEarMessage = async () => {
  earlist.value = (await GetEarList()).data.data;
}
//获取笔记本列表
const GetLaptopMessage = async () => {
  laptoplist.value = (await GetLaptopList()).data.data;
}
//获取手机列表
const GetPhoneMessage = async () => {
  phonelist.value = (await GetPhoneList()).data.data;
}
//获取电动车列表
const GetDianDongMessage = async () => {
  diandonglist.value = (await GetDianDongList()).data.data;
}
//获取相机列表
const GetCameraMessage = async () => {
  cameralist.value = (await GetCameraList()).data.data;
}
//获取自行车列表
const GetBicycleMessage = async () => {
  bicyclelist.value = (await GetBicycleList()).data.data;
}

//跳转详情页
const router = useRouter()
const toDetail = (item) => {
  switch(item.type)
  {
    case 'bicycle':
      router.push(`/bicycleDetail/${item.id}`);
      break;
    case 'earphone':
      router.push(`/earphoneDetail/${item.id}`);
      break;
    case 'laptop':
      router.push(`/laptopDetail/${item.id}`);
      break;
    case 'book':
      router.push(`/bookDetail/${item.id}`);
      break;
    case 'camera':
      router.push(`/cameraDetail/${item.id}`);
      break;
    case 'diandong':
      router.push(`/diandongDetail/${item.id}`);
      break;
    case 'phone':
      router.push(`/phoneDetail/${item.id}`);
      break;  
  }
}

//渲染商品
onMounted(async () => {
  await GetEarMessage();
  await GetBookMessage();
  await GetLaptopMessage();
  await GetDianDongMessage();
  await GetBicycleMessage();
  await GetPhoneMessage();
  await GetCameraMessage();
  goodslist.value = booklist.value.concat(earlist.value,laptoplist.value,phonelist.value,diandonglist.value,bicyclelist.value,cameralist.value);
  goodslist.value.forEach((ele,index) => {
  ele.idd = index + 1;
  })
})

//是否收藏
const IsLike = (item) => {
  item.iconColor = item.iconColor == 'skyblue' ? 'red' : 'skyblue';
  switch(item.type)
  {
    case 'bicycle': IsLikeBicyclelist(item);break;
    case 'phone': IsLikePhonelist(item);break;
    case 'book': IsLikeBooklist(item);break;
    case 'camera': IsLikeCameralist(item);break;
    case 'diandong': IsLikeDiandonglist(item);break;
    case 'earphone': IsLikeEarlist(item);break;
    case 'laptop': IsLikeLaptoplist(item);break;
  }
}
</script>

<template>
  <div class="prime">
    <div class="goods" v-for="item in goodslist" :key="item.idd" @click="toDetail(item)">
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