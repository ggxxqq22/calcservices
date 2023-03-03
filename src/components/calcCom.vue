<template>
  <div class="com" v-loading.fullscreen.lock="isLoading">
    <div class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>{{ template.type }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ template.title }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="intro">
      <div class="title">{{ template.title }}</div>
      <div class="detail">{{ template.detail }}</div>
    </div>
    <div class="upload">
      <div class="title">快来试试吧</div>
      <div class="divide"></div>
      <div class="require_text">
        上传文件格式要求
        <tip :text="template.text" :img-src="template.srcs"></tip>
      </div>
      <div class="arg" v-if="template.arg.isRequired">
        <el-input
          class="arg_upload"
          :placeholder="template.arg.text"
          v-model="arg"
          clearable>
        </el-input>
      </div>
      <el-upload
        class="upload-block"
        drag
        action=""
        :auto-upload="false"
        :on-change="handleChange"
        :file-list="fileList">
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
      <el-button type="success" class="upload_btn" @click="upload" :disabled="!isActive">上传服务器</el-button>
    </div>
<!--    <div class="download">-->
<!--      <div class="title">此处生成文件</div>-->
<!--      <div class="divide"></div>-->
<!--      <img src="@/assets/empty-box.png" alt="" class="box">-->
<!--      <el-button type="success" class="download_btn" @click="download" :disabled="!canDownload">点击下载</el-button>-->
<!--    </div>-->
    <div class="contact">
      <div class="title">联系我们</div>
      <div class="divide"></div>
      <img src="@/assets/zjucss.png" class="logo" />
      <p class="loc">地址</p>
      <p class="loc_detail">浙江大学紫金港校区公共管理学院一楼 杭州市余杭塘路866号</p>
      <p class="email">邮箱</p>
      <p class="email_detail">zjucss@zju.edu.cn</p>
      <p class="wechat">微信公众号</p>
      <img src="@/assets/wechat.png" class="wechat_detail" alt="">
    </div>
  </div>
</template>

<script>
import { dataList } from "@/constant/text";
import moment from 'moment'
import Tip from "@/components/tip";
export default {
  name: "calcCom",
  components: {
    Tip
  },
  props: ['info'],
  computed: {
    template() {
      return dataList.filter(item => item.name === this.info.name)[0]
    },
    isActive() {
      return this.fileList.length === this.template.dataNum && ((this.template.arg.isRequired && this.arg) || !this.template.arg.isRequired)
    }
  },
  watch: {
    template(newValue, oldValue) {
      this.fileList = []
      this.arg = undefined
    }
  },
  data() {
    return {
      canDownload: false,
      isLoading: false,
      fileList: [],
      arg: undefined,
      filename: ''
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList
      if(this.fileList.length > this.template.dataNum) {
        this.fileList.shift()
        this.$notify({
          title: '错误',
          message: '只能上传' + this.template.dataNum + '个文件',
          duration: 1000
        });
      }
    },
    upload() {
      this.isLoading = true
      const url = this.template.arg.isRequired ? this.template.name + '/' + this.arg + '/' + moment().format() : this.template.name + '/upload/' + moment().format();
      const formData = new FormData();
      this.fileList.forEach((item) => {
        formData.append("file", item.raw);
      });
      this.$http.post(url,formData).then((res) => {
        const data = res.data
        if(data.code === 0) {
          // 下载文件类
          if(data.filename !== '') {
            setTimeout(()=> {
              this.$confirm('数据处理成功，将自动下载文件！', '处理成功', {
                confirmButtonText: '确定下载',
                cancelButtonText: '取消',
              }).then(()=>{
                window.open(
                  "http://120.27.210.217:8025/download/" + data.filename + '/' + moment().format()
                );
              }).catch(()=>{
                this.$message({
                  type: 'info',
                  message: '已取消'
                });
              })
            }, 1500)
          }
          // 弹出信息类
          else {
            setTimeout(()=> {
              this.$alert(data.msg, '处理成功', {
                confirmButtonText: '确定',
              })
            }, 1500)
          }
        } else {
          setTimeout(()=>{
            this.$alert(data.msg, '处理失败', {
              confirmButtonText: '确定',
            })
          }, 1500)
        }
      }).catch(e => {
        setTimeout(()=> {
          this.$alert(e, '未知错误', {
            confirmButtonText: '确定',
          })
        }, 1500)
      }).finally(() => {
        setTimeout(()=>{
          this.isLoading = false
        }, 1500)
        this.fileList = []
        this.arg = undefined
      })
    },
    download() {
      window.open(
        "http://120.27.210.217:8025/download/" + this.filename + '/' + moment().format()
      );
      this.arg = undefined
      this.canDownload = false
      this.fileList = []
    }
  }
};
</script>

<style scoped lang="less">
.com {
  position: relative;
  padding-left: 48px;
  .upload {
    margin-top: 30px;
    width: 864px;
    border-radius:   15px;
    background-color: #fff;
    //overflow: scroll;
    display: inline-block;
    .title {
      color: #010101;
      margin: 24px 0 24px 24px;
      font-size: 18px;
    }
    .divide {
      border: 1px solid #F3F3F3;
    }
    .arg_upload {
      margin-top: 12px;
      margin-left: 24px;
      width: 300px;
      height: 50px;
    }
    .require_text {
      display: flex;
      margin-top: 28px;
      margin-left: 24px;
      font-size: 16px;
      color: #1B2124;
      .tip {
        margin-left: 10px;
      }
    }
    .upload-block {
      display: block;
      margin: 34px auto 20px;
      width: 600px;
      ::v-deep .el-upload-dragger {
        margin: auto;
        width: 600px;
      }
    }
    .upload_btn {
      margin: 20px auto 30px;
      display: block;
    }
  }
  .download {
    position: absolute;
    top: 54px;
    left: 940px;
    width: 265px;
    height: 409px;
    border-radius: 15px;
    background-color: #fff;
    .title {
      color: #010101;
      margin: 24px 0 24px 24px;
      font-size: 18px;
    }
    .divide {
      border: 1px solid #F3F3F3;
    }
    .box {
      margin: 20px auto;
      display: block;
    }
    .download_btn {
      margin: 30px auto 0;
      display: block;
    }
  }
  .breadcrumb {
    margin-top: 38px;
  }
  .intro {
    margin-top: 40px;
    overflow: hidden;
    width: 834px;
    border-radius: 15px;
    background-image: url("@/assets/introBackground.png");
    background-size: cover;
    padding-left: 30px;
    color: #FFFFFF;
    .title {
      margin-top: 28px;
      font-size: 32px;
    }
    .detail {
      width: 600px;
      margin-top: 14px;
      line-height: 24px;
      margin-bottom: 22px;
      font-size: 14px;
    }
  }
  .contact {
    position: absolute;
    top: 54px;
    left: 940px;
    width: 250px;
    height: 591px;
    border-radius: 15px;
    background-color: #fff;
    padding-right: 15px;
    .title {
      color: #010101;
      margin: 24px 0 24px 24px;
      font-size: 18px;
    }
    .divide {
      border: 1px solid #F3F3F3;
    }
    .logo {
      width: 105px;
      height: 24px;
      margin: 33px 0 0 24px;
    }
    .loc, .email, .wechat {
      font-size: 16px;
      color: #010101;
      margin-top: 16px;
      margin-left: 24px;
    }
    .loc_detail, .email_detail {
      font-size: 14px;
      color: #93989A;
      margin-top: 10px;
      margin-left: 24px;
    }
    .wechat_detail {
      width: 220px;
      height: 218px;
      margin: 16px auto;
      display: block;
    }
  }
}
</style>