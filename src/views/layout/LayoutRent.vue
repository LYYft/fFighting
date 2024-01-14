<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 16:33:04
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-01-10 15:02:38
 * @FilePath: \SXprogram\src\views\layout\Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import {
Search,
HomeFilled,
StarFilled,
UploadFilled
}
  from '@element-plus/icons-vue'
import { ref } from 'vue'
var input = ref('')
</script>

<template>
  <div class="box">
    <div class="header">
      <h1>ColRent</h1>
      <div class="nav"><router-link to="/prime">首页</router-link></div>
      <div class="nav"><router-link to="/upload">上传</router-link></div>
      <div class="nav"><router-link to="/collect">收藏</router-link></div>
      <div>
        <el-input v-model="input" :suffix-icon="Search" size="small"></el-input>
      </div>
      <div>登入</div>
    </div>
    <div class="content">
      <div class="left">
        <el-menu :default-active="$route.path" router style="height: 100%;">
          <el-sub-menu index="/prime">
            <template #title>
              <el-icon>
                <HomeFilled></HomeFilled>
              </el-icon>
              <span>首页</span>
            </template>
            <el-sub-menu index="classify">
              <template #title>
                <span>分类</span>
              </template>
              <el-menu-item>骑行</el-menu-item>
              <el-menu-item>书籍</el-menu-item>
              <el-menu-item>电子产品</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="/upload">
            <el-icon>
              <UploadFilled></UploadFilled>
            </el-icon>
            <span>上传</span>
          </el-menu-item>
          <el-menu-item index="/collect">
            <el-icon>
              <StarFilled></StarFilled>
            </el-icon>
            <span>收藏</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  height: 70px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid skyblue;

  .nav {
    width: 90px;
    height: 55px;
    border-radius: 27.5px;
    line-height: 55px;
    text-align: center;
    transition: all 0.4s;

    &:hover {
      background-color: #ecf5ff;
    }

    a {
      text-decoration: none;

      &:link {
        color: black;
      }

      &:visited {
        color: black;
        transition: all 0.3s;
      }
    }

    a.router-link-active {
      color: #409eff;
      transition: all 0.4s;
    }
  }


  h1 {
    color: skyblue;
  }
}

.box {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .content {
    display: flex;
    flex: 1;
    background-color: #f5f5f5;
    padding: 20px;

    .left {
      width: 150px;
    }

    .right {
      flex: 1;
      margin-left: 20px;
      background-color: white;
    }
  }
}</style>