  <script setup>
import { onMounted, ref } from 'vue'
import { Star } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { GetBicycleList,GetDianDongList } from '../../../api/GoodsRent'
import { IsLikeBicyclelist,IsLikeDiandonglist } from '../../../api/IsLikeRent'

const diandonglist = ref([]);
const bicyclelist = ref([]);
const goodslist = ref([])

//获取电动车列表
const GetDianDongMessage = async () => {
  diandonglist.value = (await GetDianDongList()).data.data;
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
    case 'diandong':
      router.push(`/diandongDetail/${item.id}`);
      break;
  }
}

//渲染商品
onMounted(async () => {
  await GetDianDongMessage();
  await GetBicycleMessage();
  goodslist.value = diandonglist.value.concat(bicyclelist.value);
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
    case 'diandong': IsLikeDiandonglist(item);break;
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