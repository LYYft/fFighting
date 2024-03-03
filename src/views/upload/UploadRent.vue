<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2023-11-12 20:36:37
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-02-29 19:38:25
 * @FilePath: \SXprogram\src\views\upload\UploadRent.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
// import { UploadBookMessage } from '../../api/UploadRent'
import { useRouter } from 'vue-router'
// import { ElMessage } from 'element-plus'

const uploadRef = ref()

const imageUrl = ref()
const category = ref()
const uploadCategory = ref([
  {id: 1, value: 'phone',label: '手机'},{id: 2, value: 'camera',label: '照相机'},{id: 3, value: 'bicycle',label: '自行车'},{id: 4, value: 'diandong',label: '电动车'},{id: 5, value: 'laptop',label: '笔记本'},{id: 6, value: 'book',label: '书籍'},{id: 7, value: 'earphone',label: '耳机'}
])                     

const onSelectFile = (uploadFile) => {
    //基于 FileReader 读取图片做预览
    const reader = new FileReader()
    //将图片地址转化为base64编码
    reader.readAsDataURL(uploadFile.raw)
    //文件读取成功后触发事件
    reader.onload = () => {
        imageUrl.value = reader.result
    }
}

//跳转对应上传表单
const router = useRouter();
router.push('/upload/phoneMessage');
const toForm = (value) => {
  switch (value) 
  {
    case 'book': router.push('/upload/bookMessage');break;
    case 'bicycle': router.push('/upload/bicycleMessage');break;
    case 'camera': router.push('/upload/cameraMessage');break;
    case 'diandong': router.push('/upload/diandongMessage');break;
    case 'earphone': router.push('/upload/earphoneMessage');break;
    case 'laptop': router.push('/upload/laptopMessage');break;
    case 'phone': router.push('/upload/phoneMessage');break;
  }
}

</script>

<template>
  <div class="uploadCategory">
    <span>上传信息</span>
    <el-select v-model="category" placeholder="上传类别" size="large" @change="toForm">
    <el-option 
    v-for="item in uploadCategory"
    :key="item.id"
    :value="item.value"
    :label="item.label">
      
    </el-option>  
    </el-select>
  </div>
  <div class="uploadMessage">
    <div>
    <el-upload
    ref="uploadRef"
    :auto-upload="false"
    class="avatar-uploader"
    :show-file-list="false"
    :on-change="onSelectFile"
    >
    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
    </el-upload>
    <br><br>
    <el-button  type="primary" size="large" @click="uploadRef.$el.querySelector('input').click()">上传图片</el-button>
    </div>
  <div class="uploadDetail">
    <h3>信 息 填 写</h3>
    <router-view :imageUrl="imageUrl" :category="category"></router-view>
  </div>
  </div>
</template>

<style scoped lang="scss">
.uploadCategory {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid skyblue;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 17px;
}
.uploadMessage {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .uploadDetail {
    h3 {
      text-align: center;
      margin-bottom: 25px;
      margin-top: 15px;
    }
    width: 400px;
    height: 500px;
    border: 1px solid skyblue;
    background-color: rgba(135, 207, 235, 0.279);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}
</style>

<style scoped>
.avatar-uploader .avatar {
  width: 300px;
  height: 300px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 300px;
  text-align: center;
}
</style>