<script setup>
import { onMounted, ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import {GetLaptopList,GetPhoneList } from '../../../api/GoodsRent'
import { IsLikeLaptoplist,IsLikePhonelist } from '../../../api/IsLikeRent'

const laptoplist = ref([]);
const phonelist = ref([]);
const goodslist = ref([])

//获取笔记本列表
const GetLaptopMessage = async () => {
  laptoplist.value = (await GetLaptopList()).data.data;
}
//获取手机列表
const GetPhoneMessage = async () => {
  phonelist.value = (await GetPhoneList()).data.data;
}

//跳转详情页
const router = useRouter()
const toDetail = (item) => {
  switch(item.type)
  {
    case 'laptop':
      router.push(`/laptopDetail/${item.id}`);
      break;
    case 'phone':
      router.push(`/phoneDetail/${item.id}`);
      break;  
  }
}

//渲染商品
onMounted(async () => {
  await GetLaptopMessage();
  await GetPhoneMessage();
  goodslist.value = laptoplist.value.concat(phonelist.value);
  goodslist.value.forEach((ele,index) => {
  ele.idd = index + 1;
  })
})

//是否收藏
const IsLike = (item) => {
  item.iconColor = item.iconColor == 'skyblue' ? 'red' : 'skyblue';
  switch(item.type)
  {
    case 'phone': IsLikePhonelist(item);break;
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