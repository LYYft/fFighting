<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-26 21:23:37
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-18 17:11:49
 * @FilePath: \SXprogram\src\views\prime\DetailRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { GetCameraList } from '../../../api/GoodsRent';
const route = useRoute()
const cameraDetail = ref({})
const index = route.params.id - 1
const cameralist = ref([])
const GetCameraMessage = async () => {
    cameralist.value = (await GetCameraList()).data.data;
    cameraDetail.value = cameralist.value[index]
}
GetCameraMessage()
</script>

<template>
    <div class="detail">
        <div class="detailContent">
            <div class="leftBox">
                <img :src="'../../../../' + `${cameraDetail.img}`">
            </div>
            <div class="rightBox">
                <h3>{{ cameraDetail.name }}</h3>
                <ul>
                    <li>颜色：<span>{{ cameraDetail.color }}</span></li>
                    <li>像素：<span>{{ cameraDetail.pixel }}</span></li>
                    <li>对焦功能：<span>{{ cameraDetail.focusFeature }}</span></li>
                    <li>租期：<span>12个月</span></li>
                    <li>
                        <span>租金：<span>￥{{ cameraDetail.price }}/月</span></span>&nbsp;
                        <span>日租金：<span>￥{{ (cameraDetail.price / 30).toFixed(2) }}/天</span></span>
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