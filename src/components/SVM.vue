<template lang="">
  <div id="container">
    <h2>SVM：支持向量机算法处理分类问题</h2>
    <h3>支持向量机（support vector machines, SVM）是一种二分类模型，它的基本模型是定义在特征空间上的间隔最大的线性分类器。 SVM还包括核技巧，这使它成为实质上的非线性分类器。SVM的的学习策略就是间隔最大化，可形式化为一个求解凸二次规划的问题，也等价于正则化的合页损失函数的最小化问题。SVM的的学习算法就是求解凸二次规划的最优化算法。 SVM将实例的特征向量映射成空间中的一些点，SVM的目的就是想要画成一条线，以最好得区分这两类点，以至如果以后 有了新的点，这条线也能做出很好的分类。SVM适合中小型数据样本、非线性、高维的分类问题。</h3>
    <el-upload
      class="upload"
      ref="upload"
      action="none"
      :file-list="fileList"
      :on-change="add"
      :auto-upload="false">
      <el-button slot="trigger" size="large" type="primary"><i class="el-icon-paperclip"></i>选取文件</el-button>
      <el-button style="margin-left: 20px;" size="large" type="success" @click="submitUpload"><i class="el-icon-upload2"></i>上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip">请同时上传训练集和测试集，并分别命名为train.csv,test.csv</div>
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
      if(this.fileList.length != 2){
        this.$alert('必须上传两个文件！', '上传错误', {
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
      window.open('http://localhost:8025' + this.$router.history.current.path + '/download/' + Math.random())
      this.fileList = []
      this.input = ''
    }
  }
}
</script>
<style lang="less" scoped>
  #container {
    margin: -20px;
    min-height: calc(100vh - 264px);
    position: relative;
    padding-bottom: 200px;
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