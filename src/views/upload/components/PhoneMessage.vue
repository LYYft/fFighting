<!--
 * @Author: Junk Chen junkchen@vip.qq.com
 * @Date: 2024-02-24 15:39:58
 * @LastEditors: Junk Chen junkchen@vip.qq.com
 * @LastEditTime: 2024-03-03 15:12:18
 * @FilePath: \SXprogram\src\views\upload\components\PhoneMessage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup>
import { ref } from 'vue'
import { UploadPhoneMessage } from '../../../api/UploadRent';

const phoneMessage = ref({name: '',img: '',price: '',memory: '',color: '',iconColor: 'skyblue',type: '',classification: '电子产品'})
const formRef = ref()
const rules = {
  name: [
    { required: true, message:'请输入手机品牌', trigger: 'blur' }
  ],
  color: [
  { required: true, message:'请输入手机颜色', trigger: 'blur' }
  ],
  memory: [
    { required: true, message:'请输入手机内存', trigger: 'blur' }
  ],
  price: [
  { required: true, message:'请输入每月租金', trigger: 'blur' },
  {type: 'number', message: '请输入数字', trigger: 'blur'}
  ]
}

// 上传表单
const propsData = defineProps(['category','imageUrl'])
const onSubmit = async () => {
  if(propsData.category == undefined) {
    ElMessage.warning('请填写上传类别');
    return;
  }
  await formRef.value.validate()
  phoneMessage.value.type = propsData.category
  phoneMessage.value.img = propsData.imageUrl
  await UploadPhoneMessage(phoneMessage.value)
  // console.log(bookMessage.value);
  ElMessage.success('上传图片成功')
}
</script>
<template>
    <div>
    <el-form 
    :model="phoneMessage" 
    label-position="right"
    label-width="100px"
    :rules="rules"
    ref="formRef"
    hide-required-asterisk
    >
      <el-form-item label="手机品牌" prop="name">
        <el-input v-model="phoneMessage.name"></el-input>
      </el-form-item>
      <el-form-item label="手机颜色" prop="color">
      <el-input v-model="phoneMessage.color"></el-input>  
      </el-form-item>
      <el-form-item label="手机内存" prop="memory">
      <el-input v-model="phoneMessage.memory"></el-input>  
      </el-form-item>
      <el-form-item label="每月租金/元" prop="price">
      <el-input v-model.number="phoneMessage.price"></el-input>  
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