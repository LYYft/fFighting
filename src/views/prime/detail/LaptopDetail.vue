<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-26 21:23:37
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-07 16:40:35
 * @FilePath: \SXprogram\src\views\prime\DetailRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref, onBeforeMount, onBeforeUnmount } from 'vue'
import { nextTick } from 'vue';
import { GetGoodsMessage } from '../../../api/GoodsRent';
// import mitt from '@/utils/event-bus.js'
const laptopDetail = ref({})
const GetGoods = async () => {
    const res = await GetGoodsMessage();
    console.log(res);
    laptopDetail.value = res.data.data;
}
GetGoods();

// onBeforeMount(() => {
//     mitt.on('sentLaptop',(detail) => {
//     console.log(detail);
//     laptopDetail.value = detail;
//     console.log(laptopDetail.value);
//     console.log(laptopDetail.value.name);
// })
// })
// mitt.on('sentLaptop',(detail) => {
//     console.log(detail);
//     laptopDetail.value = detail;
//     console.log(laptopDetail.value);
//     console.log(laptopDetail.value.name);
//     nextTick(() => {
//     console.log(laptopDetail.value);
//   });
// })

// onBeforeUnmount(() => {
//     mitt.off('sentLaptop')
// })
</script>

<template>
    <div class="detail">
        <div class="detailContent">
            <div class="leftBox">
                <img src="src/assets/image/bicycle.png">
            </div>
            <div class="rightBox">
                <h3>{{ laptopDetail.name }}</h3>
                <ul>
                    <li>型号：<span>Dell</span></li>
                    <li>颜色：<span>黑</span></li>
                    <li>租期：<span>12个月</span></li>
                    <li>
                        <span>租金：<span>￥132/月</span></span>
                        <span>日租金：<span>￥4.4/天</span></span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detail {
    height: 100%;
    width: 100%;
    padding: 50px 40px;
    .detailContent {
        width: 100%;
        height: 100%;
        border: 15px solid skyblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .leftBox {
            width: 400px;
            height: 400px;
            border: 1px solid black;
            img {
                width: 400px;
            }
        }
        .rightBox {
            width: 400px;
            height: 450px;
            border: 1px solid black;
            cursor: default;
            h3 {
                padding-bottom: 5px;
                border-bottom: 2px solid gray; 
            }
            ul {
                font-size: large;
                list-style: none;
                color: #959595;
                li {
                    margin-bottom: 8px;
                }
            }
        }
    }
}
</style>