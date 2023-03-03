<template>
  <div class="pub">
    <div class="title">数据集发布</div>
    <el-steps direction="vertical" :active="step" class="step">
      <el-step title="步骤 1" description="请填写数据集简介"></el-step>
      <el-step title="步骤 2" description="请选择数据集类型"></el-step>
      <el-step title="步骤 3" description="请上传对应文件（可选）"></el-step>
      <el-step title="步骤 4" description="请填写联系方式"></el-step>
    </el-steps>
    <el-form
      :model="ruleForm"
      :rules="rules"
      :label-position="'left'"
      ref="ruleForm"
      label-width="150px"
      class="ruleForm"
    >
      <template v-if="step === 1">
        <el-form-item label="数据集名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="数据集简介" prop="intro">
          <el-input type="textarea" v-model="ruleForm.intro"></el-input>
        </el-form-item>
        <el-form-item label="数据集标签" prop="tag">
          <el-input v-model="ruleForm.tag"></el-input>
          <p>多个标签以英文逗号分隔</p>
        </el-form-item>
      </template>
      <template v-if="step === 2">
        <el-form-item label="数据集类型" prop="isClean">
          <el-radio-group v-model="ruleForm.isClean">
            <el-radio label="0">普通数据集</el-radio>
            <el-radio label="1">待清洗数据集</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="数据集公开类型" prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="0">公开数据集</el-radio>
            <el-radio label="1">非公开数据集</el-radio>
          </el-radio-group>
        </el-form-item>
      </template>
      <template v-if="step === 3">
        <el-form-item
          v-if="ruleForm.type === '0'"
          label="数据集文件"
          prop="fileList"
        >
          <el-upload
            class="upload-block"
            drag
            action=""
            :limit="1"
            :auto-upload="false"
            :on-change="handleChange"
            :file-list="ruleForm.fileList">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          </el-upload>
        </el-form-item>
        <el-form-item label="文件链接" prop="fileLink">
          <el-input v-model="ruleForm.fileLink"></el-input>
        </el-form-item>
        <el-form-item label="数据集图片" prop="imgList">
          <el-upload
            class="upload-demo"
            action=""
            :auto-upload="false"
            :limit="1"
            :on-change="handleImgChange"
            :file-list="ruleForm.imgList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </template>
      <template v-if="step === 4">
        <el-form-item label="姓名" prop="person">
          <el-input v-model="ruleForm.person"></el-input>
        </el-form-item>
        <el-form-item label="联系方式(邮箱）" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="相关链接描述" prop="linkName">
          <el-input v-model="ruleForm.linkName" placeholder="相关链接"></el-input>
        </el-form-item>
        <el-form-item label="相关链接" prop="link">
          <el-input v-model="ruleForm.link"></el-input>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="back" v-if="step !== 1"
        >上一步</el-button
        >
        <el-button type="primary" @click="submitForm('ruleForm')"
          >{{ step === 4 ? '立即发布' : '下一步'}}</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { uploadDataSet } from "@/api/dataSet";
export default {
  name: 'pub',
  data() {
    return {
      step: 1,
      ruleForm: {
        name: '',
        type: '', //类型：公开，非公开
        isClean: '',
        intro: '', //简介
        email: '',
        tag: '',
        fileList: [],
        imgList: [],
        link: '',
        person: '',
        linkName: '相关链接',
        fileLink: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入数据集名称', trigger: 'blur' }
        ],
        isClean: [
          { required: true, message: '请选择数据集类型', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择数据集公开类型', trigger: 'change' }
        ],
        intro: [
          { required: true, message: '请填写数据集简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      if(this.step === 4) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.ruleForm.tag = this.ruleForm.tag.split(',')
            // 发布数据集发送请求接口
            const form = this.ruleForm
            const formData = new FormData()
            const dataFile = form.fileList
            dataFile.forEach((item) => {
              formData.append("file", item.raw);
            });
            delete form.fileList
            if(form.imgList.length) {
              //转换base64格式
            } else {
              delete form.imgList
            }
            formData.append('info', JSON.stringify({
              form
            }))
            this.$http.post('uploadData', formData).then(res => {
              if(res.data === 'success') {
                this.$notify({
                  title: '成功',
                  message: '发布成功',
                  duration: 1000
                });
                setTimeout(()=>{
                  location.reload();
                }, 1200)
              } else {
                this.$notify({
                  title: '错误',
                  message: '发布失败',
                  duration: 1000
                });
                setTimeout(()=>{
                  location.reload();
                }, 1200)
              }
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      } else {
        this.step ++
      }
    },
    back() {
      this.step--
    },
    handleChange(file, fileList) {
      this.ruleForm.fileList = fileList
    },
    handleImgChange(file, fileList) {
      this.ruleForm.imgList = fileList
    },
  }
}
</script>

<style lang="less" scoped>
.pub {
  width: 1640px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 8px;
  padding: 30px 0px;
  position: relative;
  height: 700px;
  .step {
    position: absolute;
    height: 600px;
    left: 50px;
  }
  .ruleForm {
    width: 700px;
    margin: auto;
    p {
      color: rgb(119, 111, 111);
      font-size: 12px;
      margin-top: -5px;
    }
  }
  .title {
    font-size: 26px;
    margin-bottom: 30px;
    text-align: center;
  }
}
.upload {
  margin-left: 10px;
  margin-bottom: 10px;
}
</style>
