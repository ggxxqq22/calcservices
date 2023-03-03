<template>
  <div id="container">
    <div id="box">
      <div id="content">
        <span>用户名:</span>
        <el-input v-model="input" placeholder="请输入账户名" id="name"></el-input>
      </div>
      <div id="content">
        <span>密码:</span>
        <el-input
          placeholder="请输入密码"
          v-model="password"
          show-password
        ></el-input>
      </div>
      <router-link to="/server/log" id="item">
        <el-button type="success" id="btn">登入</el-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: "",
      password: "",
    };
  },
};
</script>

<style lang="less" scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #ddd;
  #box {
    width: 600px;
    height: 400px;
    border-radius: 15px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    margin-top: -150px;
    #content {
      margin: 70px auto 0;
      width: 50%;
      display: flex;
      align-items: center;
      span {
        width: 100px;
        
      }
    }
    #item {
      width: 30%;
      margin: 80px auto;
      text-align: center;
    }
  }
}
</style>