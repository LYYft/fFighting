<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-26 21:23:37
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-23 00:07:38
 * @FilePath: \SXprogram\src\views\prime\DetailRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { GetBookList } from '../../../api/GoodsRent';
const route = useRoute()
const bookDetail = ref({})
const index = route.params.id - 1
const booklist = ref([])
const GetBookMessage = async () => {
    booklist.value = (await GetBookList()).data.data;
    bookDetail.value = booklist.value[index]
}
GetBookMessage()
</script>

<template>
    <div class="detail">
        <div class="detailContent">
            <div class="leftBox">
                <img :src="'../../../../' + `${bookDetail.img}`">
            </div>
            <div class="rightBox">
                <h3>{{ bookDetail.name }}</h3>
                <ul>
                    <li>主题：<span>{{ bookDetail.theme }}</span></li>
                    <li>出版社：<span>{{ bookDetail.publishHouse }}</span></li>
                    <li>出版时间：<span>{{ bookDetail.publishTime }}</span></li>
                    <li>租期：<span>12个月</span></li>
                    <li>
                        <span>租金：<span>￥{{ bookDetail.price }}/月</span></span>&nbsp;
                        <span>日租金：<span>￥{{ (bookDetail.price / 30).toFixed(2) }}/天</span></span>
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