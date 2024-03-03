<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-02-24 13:57:36
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-03-03 14:35:39
 * @FilePath: \SXprogram\src\views\upload\components\BicycleMessage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { UploadBicycleMessage } from '../../../api/UploadRent';

const bicycleMessage = ref({img: '',name: '',type: '',color: '',frameMaterial: '',price: '',iconColor: 'skyblue',styling: '',classification: '骑行'})
const formRef = ref()
const rules = {
  name: [
    { required: true, message:'请输入自行车品牌', trigger: 'blur' }
  ],
  color: [
  { required: true, message:'请输入自行车颜色', trigger: 'blur' }
  ],
  frameMaterial: [
  { required: true, message:'请输入自行车框架材料', trigger: 'blur' }
  ],
  styling: [
  { required: true, message:'请输入自行车款式', trigger: 'blur' }
  ],
  price: [
  { required: true, message:'请输入每月租金', trigger: 'blur' },
  {type: 'number', message: '请输入数字', trigger: 'blur'}
  ]
}

// 上传表单
const propsData = defineProps(['category','imageUrl'])
const onSubmit = async () => {
  await formRef.value.validate()
  bicycleMessage.value.type = propsData.category
  bicycleMessage.value.img = propsData.imageUrl
  await UploadBicycleMessage(bicycleMessage.value)
  // console.log(bookMessage.value);
  ElMessage.success('上传图片成功')
}
</script>
<template>
    <div>
    <el-form 
    :model="bicycleMessage" 
    label-position="right"
    label-width="100px"
    :rules="rules"
    ref="formRef"
    hide-required-asterisk
    >
      <el-form-item label="自行车品牌" prop="name">
        <el-input v-model="bicycleMessage.name"></el-input>
      </el-form-item>
      <el-form-item label="自行车颜色" prop="color">
      <el-input v-model="bicycleMessage.color"></el-input>  
      </el-form-item>
      <el-form-item label="框架材料" prop="frameMaterial">
      <el-input v-model="bicycleMessage.frameMaterial"></el-input>  
      </el-form-item>
      <el-form-item label="自行车款式" prop="styling">
      <el-input v-model="bicycleMessage.styling"></el-input>  
      </el-form-item>
      <el-form-item label="每月租金/元" prop="price">
      <el-input v-model.number="bicycleMessage.price"></el-input>  
      </el-form-item>
    </el-form>
    <div id="button"><el-button @click="onSubmit" size="large" type="primary">上传</el-button></div>
    </div>
</template>
<style scoped>
#button {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
</style>