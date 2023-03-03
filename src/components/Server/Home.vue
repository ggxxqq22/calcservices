<template>
  <el-container id="app-container">
    <el-header id="header" height="64px">
      <img src="@/assets/zjucss.png" id="main-logo" />
      <div id="title">CSS服务器资源数据中心</div>
      <router-link to="/server/data"><span id="tab">数据中心</span></router-link>
      <router-link to="/server/useradd"><span id="tab">资源申请</span></router-link>
      <router-link to="/server/login"><span id="tab">管理员登入</span></router-link>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
  }
</script>

<style lang="less" scoped>
.el-header {
    background-color: rgb(16, 78, 91);
    //background: no-repeat url('@/assets/home_backgroud.png') 0 -50px;
    color: #333;
    line-height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    #main-logo {
      width: 167px;
      height: 34px;
    }
    #tab {
      width: 150px;
      margin-right: 40px;
      text-decoration: none;
      font-size: 16px;
      color: white;
    }
    #title {
      font-size: 24px;
      margin-left: 80px;
      flex: 1;
    }
  }
  
  
  .el-main {
    background-color: #f5f9fa;
    min-height: calc(100vh - 64px);
    color: #333;
    padding: 0 0;
  }
  
</style>