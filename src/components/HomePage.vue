<template>
  <div id="container">
    <div id="intro">
      <h3>欢迎来到计算社会科学研究平台</h3>
      <p>
        计算社会科学研究平台旨在探索如何基于海量数据与新兴计算技术，研究公共管理等诸多社会学科基本命题与研究范式问题，它阐释了社会科学研究在新技术情景下所呈现的新发展、新动态和前景。
      </p>
      <p>
        现有功能：应用多种数据分析和机器学习方法来提取数据有用的信息的计算服务功能，包括：机器学习模型（聚类、决策树、随机森林等），数据分析工具（PCA降维、t-SNE降维、词云生成、文献PDF内容提取等）
      </p>
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
export default {}
</script>
<style lang="less" scoped>
#container {
  height: 980px;
  position: relative;
  overflow: hidden;
  #intro {
    text-align: center;
    h3 {
      margin: 100px auto 60px;
      font-size: 36px;
      font-weight: 500;
    }
    p {
      color: #89929c;
      width: 1000px;
      margin: 10px auto 20px;
      font-size: 20px;
    }
  }
  .el-footer {
    position: absolute;
    bottom: 0;
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
