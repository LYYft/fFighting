<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-12-11 22:42:15
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-18 00:07:17
 * @FilePath: \SXprogram\src\views\prime\detail\EarphoneDetail.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { GetEarList } from '../../../api/GoodsRent';
const route = useRoute()
const earphoneDetail = ref({})
const index = route.params.id - 1
const earlist = ref([])
const GetEarMessage = async () => {
  earlist.value = (await GetEarList()).data.data;
  earphoneDetail.value = earlist.value[index]
  console.log(earphoneDetail.value);
  console.log(earphoneDetail.value.img);
}
GetEarMessage()
</script>

<template>
    <div class="detail">
        <div class="detailContent">
            <div class="leftBox">
                <img :src="'../../../../' + `${earphoneDetail.img}`">
            </div>
            <div class="rightBox">
                <h3>{{ earphoneDetail.name }}</h3>
                <ul>
                    <li>类型：<span>{{ earphoneDetail.styling }}</span></li>
                    <li>颜色：<span>{{ earphoneDetail.color }}</span></li>
                    <li>租期：<span>12个月</span></li>
                    <li>
                        <span>租金：<span>￥{{ earphoneDetail.price }}/月</span></span>
                        &nbsp;
                        <span>日租金：<span>￥{{ (earphoneDetail.price / 30).toFixed(2) }}/天</span></span>
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
            // border: 1px solid black;
            display: flex;
            flex-direction: column;
            justify-content: center;
            transition: all .3s;
            img {
                width: 400px;
                transition: all .3s;
            }
        }

        .rightBox {
            width: 400px;
            height: 450px;
            // border: 1px solid black;
            cursor: default;
            transition: all .3s;
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

@media screen and (max-width: 1100px) {
    .detail {
        .detailContent {
            .leftBox {
                width: 300px;
                height: 300px;

                img {
                    width: 300px;
                }
            }

            .rightBox {
                width: 300px;
            }
        }
    }
}
</style>