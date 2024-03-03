<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:35:38
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-13 22:45:27
 * @FilePath: \SXprogram\src\views\collect\CollectRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { GetBookList,GetEarList,GetBicycleList,GetCameraList,GetDianDongList,GetLaptopList,GetPhoneList } from '../../api/GoodsRent';
const booklist = ref([]);
const earlist = ref([]);
const laptoplist = ref([]);
const diandonglist = ref([]);
const phonelist = ref([]);
const bicyclelist = ref([]);
const cameralist = ref([]);
const goodslist = ref([]);
const goodslist_ = ref([]);

const bgcolor = ref({backgroundColor: 'white'})
const blank = ref(false)

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


const GetGoodsList = async () => {
  await GetEarMessage();
  await GetBookMessage();
  await GetLaptopMessage();
  await GetDianDongMessage();
  await GetBicycleMessage();
  await GetPhoneMessage();
  await GetCameraMessage();
  goodslist.value = booklist.value.concat(earlist.value,laptoplist.value,phonelist.value,diandonglist.value,bicyclelist.value,cameralist.value);
  goodslist.value.forEach((e) => {
    if(e.iconColor == "red")
    goodslist_.value.unshift(e)
  })

  if(goodslist_.value.length == 0)
  blank.value = true
  

  //改变空白状态背景颜色
  if(goodslist_.value.length == 0)
  bgcolor.value.backgroundColor = 'white';
  else
  bgcolor.value.backgroundColor = '#f5f6fa'
}
GetGoodsList();

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

</script>

<template>
  <div class="prime" :style="bgcolor" >
    <div class="goods" v-for="item in goodslist_" :key="item.id" @click="toDetail(item)">
      <div id="image">
      <img :src=item.img>
      </div>
      <p><a>{{ item.name }}</a></p>
      <p>￥{{ item.price }}/月起</p>
    </div>
    <el-empty  description="记得收藏哦" :image-size="400" v-if="blank"></el-empty>
  </div>
  
</template>

<style scoped lang="scss">
.prime {
    width: 100%;
    height: 630px;
    padding: 10px 0 0 10px;
    // background-color: #f5f6fa;
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