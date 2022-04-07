<template lang="">
  <div id="container">
    <h2>插值法处理缺失值：</h2>
    <h3>在数据挖掘中，原始数据中存在着大量不完整、偏离的数据。这些问题数据轻则影响数据挖掘执行效率，重则影响执行结果。因此数据预处理工作必不可少，而其中常见工作的就是数据集的缺失值处理。 此处采用拉格朗日法进行插补。</h3>
    <el-upload
      class="upload"
      ref="upload"
      action="none"
      :file-list="fileList"
      :on-change="add"
      :auto-upload="false">
      <el-button slot="trigger" size="large" type="primary"><i class="el-icon-paperclip"></i>选取文件</el-button>
      <el-button style="margin-left: 20px;" size="large" type="success" @click="submitUpload"><i class="el-icon-upload2"></i>上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">请上传一个文件，只支持上传csv文件</div>
    </el-upload>
    <div class="download">
      <el-button size="large" type="primary" @click="submitDownload">下载文件<i class="el-icon-download"></i></el-button>
    </div>
    <el-container>
      <el-footer height="200px">
        <div id="location">
          <i class="el-icon-location"></i>
          <span slot="title">地址</span>
          <p>浙江大学紫金港校区公共管理学院一楼 杭州市余杭塘路866号</p>
        </div>
        <div id="mail">
          <i class="el-icon-message"></i>
          <span slot="title">邮箱</span>
          <p>zjucss@zju.edu.cn</p>
        </div>
        <div id="wechat">
          <i class="el-icon-chat-round"></i>
          <span slot="title">微信公众号</span>
          <p><img src="@/assets/wechat.png" alt="" /></p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
      return {
        fileList: [],
        files: new FormData(),
        input: '',
        flag: 0
      };
    },
  methods: {
    add(file, fileList) {
      this.fileList = fileList
    },
    submitUpload() {
      //判断是否有正确的argv
      if(this.fileList.length != 1){
        this.$alert('只能上传一个文件！', '上传错误', {
          confirmButtonText: '确定',
        })
        return 
      }

      const url = this.$router.history.current.path + '/' + 'upload' +'/'+ Math.random()
      const formData = new FormData();
      this.fileList.forEach((item) => {
        formData.append("file", item.raw);
      });
      this.$http.post(url,formData).then((response)=>{
        if(response.data === 'success'){
          this.$alert('数据处理成功，请下载文件！', '处理成功', {
          confirmButtonText: '确定',
          })
          this.flag = 1
        }else{
          this.$alert('数据处理失败，请重新操作！', '处理失败', {
          confirmButtonText: '确定',
          })
          this.fileList = []
          this.input = ''
        }
      }).catch((error)=>{
          this.$alert('数据处理失败，请重新操作！', '处理失败', {
          confirmButtonText: '确定',
          })
          this.fileList = []
          this.input = ''
        })
      
    },
    submitDownload() {
      if(this.flag !== 1){
        this.$alert('未上传文件', '下载失败', {
        confirmButtonText: '确定',
        })
        return
      }
      this.flag = 0
      window.open('http://120.27.210.217:8025' +this.$router.history.current.path + '/download/' + Math.random())
      this.fileList = []
      this.input = ''
    }
  }
}
</script>
<style lang="less" scoped>
  #container {
    min-height: 100%;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 200px;
    overflow: hidden;
    h2 {
      padding: 50px 60px 0;
      font-size: 24px;
      line-height: 24px;
      font-weight: 400;
    }

    h3 {
      text-indent: 2em;
      padding: 15px 60px 0;
      font-size: 20px;
      line-height: 36px;
      font-weight: 400;
    }

    .el-input {
      margin: 60px 60px 0;
      margin-bottom: 30px;
      width: 300px;
      display: block;
    }
    .upload {
      margin: 40px 60px 0;
      width: 500px;
      i {
        margin: 0 10px 0 0;
        font-size: 14px;
      }
      .el-upload__tip {
        margin-top: 30px;
        margin-bottom: 20px;
        font-size: 16px;
      }
    }
    .download {
      margin: 30px 60px 0;
      width: 500px;
      i {
        margin: 0 0 0 10px;
        font-size: 14px;
      }
      .el-input {
        margin-bottom: 30px;
        width: 300px;
        display: block;
      }
    }
    .el-footer {
      position: absolute;
      bottom : 0;
      width: 100%;
      color: #333;
      display: flex;
      div {
        flex: 1;
        padding: 30px 35px; 
        text-align: center;
        i {
          font-size: 24px;
          vertical-align: middle;
          color: green;
          margin-right: 5px;
        }
        p {
          margin-top: 30px;
          line-height: 28px;
          img {
            width: 120px;
          }
        }
      }
  }
  }
  
  
</style>