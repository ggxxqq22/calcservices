<template>
  <el-container id="app-container">
    <el-header id="header" height="100px">
      <img src="@/assets/zjucss.png" id="main-logo" />
      <div id="title">CSS数据集共享平台</div>
      <router-link to="/dataset/home"><div id="tips">首页</div></router-link>
      <router-link to="/dataset/page"><div id="tips">目录</div></router-link>
      <router-link to="/dataset/pub"><div id="tips">发布</div></router-link>
    </el-header>
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
    <div class="feedback" @click="handleFeedback">
      <i class="el-icon-chat-round"></i>
    </div> 
  </el-container>
</template>

<script>
export default {
  methods: {
    handleFeedback() {

    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #FFF;
  color: #333;
  line-height: 64px;
  display: flex;
  align-items: center;
  color: #7F879E;
  border: 1px solid #F3F3F3;
  #main-logo {
    margin-left: 36px;
    width: 137px;
    height: 28px;
  }
  #tips {
    width: 50px;
    color: #67c441;
  }
  #title {
    font-size: 14px;
    margin-left: 210px;
    flex: 1;
  }
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  //text-align: center;
  #title1 {
    margin-left: -10px;
  }
  .el-menu-item {
    margin-left: 10px;
  }
}
.el-main {
  background-color: #f5f9fa;
  min-height: calc(100vh - 64px);
  color: #333;
  padding: 0 0;
}
#menu {
  height: 100%;
  span {
    font-size: 16px;
    margin-left: 10px;
  }
}

.feedback {
  position: fixed;
  right: 0;
  bottom: 20vh;
  width: 40px;
  height: 40px;
  border: 1px solid gray;
  border-radius: 2px;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  background-color: #fff;
  &:hover {
    cursor: pointer;
  }
}
</style>
