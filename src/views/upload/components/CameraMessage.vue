<script setup>
import { ref } from 'vue'
import { UploadCameraMessage } from '../../../api/UploadRent';

const cameraMessage = ref({img: '',name: '',color: '',pixel: '',focusFeature: '',price: '',iconColor: 'skyblue',type: '',classification: ''})
const formRef = ref()
const rules = {
  name: [
    { required: true, message:'请输入照相机品牌', trigger: 'blur' }
  ],
  color: [
  { required: true, message:'请输入照相机颜色', trigger: 'blur' }
  ],
  pixel: [
  { required: true, message:'请输入照相机像素', trigger: 'blur' }
  ],
  focusFeature: [
  { required: true, message:'请输入照相机对焦模式', trigger: 'blur' }
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
  cameraMessage.value.type = propsData.category
  cameraMessage.value.img = propsData.imageUrl
  await UploadCameraMessage(cameraMessage.value)
  // console.log(bookMessage.value);
  ElMessage.success('上传图片成功')
}
</script>
<template>
    <div>
    <el-form 
    :model="cameraMessage" 
    label-position="right"
    label-width="100px"
    :rules="rules"
    ref="formRef"
    hide-required-asterisk
    >
      <el-form-item label="照相机品牌" prop="name">
        <el-input v-model="cameraMessage.name"></el-input>
      </el-form-item>
      <el-form-item label="照相机颜色" prop="color">
      <el-input v-model="cameraMessage.color"></el-input>  
      </el-form-item>
      <el-form-item label="照相机像素" prop="pixel">
      <el-input v-model="cameraMessage.pixel"></el-input>  
      </el-form-item>
      <el-form-item label="对焦模式" prop="focusFeature">
      <el-input v-model="cameraMessage.focusFeature"></el-input>  
      </el-form-item>
      <el-form-item label="每月租金/元" prop="price">
      <el-input v-model.number="cameraMessage.price"></el-input>  
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
