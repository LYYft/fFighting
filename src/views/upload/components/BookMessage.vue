<script setup>
import { ref } from 'vue'
import { UploadBookMessage } from '../../../api/UploadRent';

//提交表单
const bookMessage = ref({type: '',img: '',name: '',price: '',iconColor: 'skyblue',theme: '',publishHouse: '',publishTime: '',classification: '书籍'})


const formRef = ref()
const rules = {
  name: [
    { required: true, message:'请输入书籍名称', trigger: 'blur' }
  ],
  theme: [
  { required: true, message:'请输入书籍类型', trigger: 'blur' }
  ],
  publishHouse: [
  { required: true, message:'请输入书籍出版社', trigger: 'blur' }
  ],
  publishTime: [
  { required: true, message:'请输入书籍出版时间', trigger: 'blur' },
  { 
    pattern: /[0-9]{1,4}年[0-9]{1,2}月([0-9]{1,2}日)?/, 
    message: '请输入正确格式，例...年...月...日', 
    trigger: 'blur' 
  }
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
  bookMessage.value.type = propsData.category
  bookMessage.value.img = propsData.imageUrl
  await UploadBookMessage(bookMessage.value)
  // console.log(bookMessage.value);
  console.log(propsData);
  ElMessage.success('上传图片成功')
}
</script>

<template>
<div>
    <el-form 
    :model="bookMessage" 
    label-position="right"
    label-width="100px"
    :rules="rules"
    ref="formRef"
    hide-required-asterisk
    >
      <el-form-item label="书籍名称" prop="name">
        <el-input v-model="bookMessage.name"></el-input>
      </el-form-item>
      <el-form-item label="主题" prop="theme">
      <el-input v-model="bookMessage.theme"></el-input>  
      </el-form-item>
      <el-form-item label="出版社" prop="publishHouse">
      <el-input v-model="bookMessage.publishHouse"></el-input>  
      </el-form-item>
      <el-form-item label="出版时间" prop="publishTime">
      <el-input v-model="bookMessage.publishTime"></el-input>  
      </el-form-item>
      <el-form-item label="每月租金/元" prop="price">
      <el-input v-model.number="bookMessage.price"></el-input>  
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