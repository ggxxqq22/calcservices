<template>
  <div id="app">
    <el-container id="app-container">
      <el-header id="header" height="64px">
        <img src='@/assets/zjucss.png' id="main-logo">
        <div id="title">CSS在线数据处理计算服务中心</div>
        <!-- <a href=""><div id="tips">说明文档</div></a> -->
      </el-header>
      <el-container>
        <el-aside width="230px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#E9EEF3"
            text-color="#000"
            active-text-color="rgb(16, 78, 91)"
            id="menu">
            <router-link to='/'>
              <el-menu-item id="title1">
                  <i class="el-icon-monitor"></i>
                  <span slot="title">机器学习方法</span>
              </el-menu-item>
            </router-link>
            <router-link :to="'/'+item.name" v-for="item in firstList" :key="item.id">
              <el-menu-item :index="item.id">
                <i class="el-icon-monitor"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </router-link>
            <router-link to='/'>
              <el-menu-item id="title1">
                  <i class="el-icon-document"></i>
                  <span slot="title">数据分析工具</span>
              </el-menu-item>
            </router-link>
            <router-link :to="'/'+item.name" v-for="item in secondList" :key="item.id">
              <el-menu-item :index="item.id">
                <i class="el-icon-document"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </router-link>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      firstList: [
        {id: '1', name: 'kmeans', title: 'kmeans聚类'},
        {id: '2', name: 'decisionTree', title: '决策树'},
        {id: '3', name: 'randomForest', title: '随机森林'},
        {id: '4', name: 'svm', title: 'SVM'},
        {id: '5', name: 'svr', title: 'SVR'},
        {id: '6', name: 'linearRegression', title: '多元线性回归'},
        {id: '7', name: 'logisticRegression', title: '逻辑回归'},
      ],
      secondList: [
        {id: '8', name: 'pca', title: 'PCA降维'},
        {id: '9', name: 'TSNE', title: 't-SNE降维'},
        {id: '10', name: 'Ttest', title: '单样本T检验'},
        {id: '11', name: 'ploydata', title: '插值法处理缺失值'},
        {id: '12', name: 'wordCloud', title: '词云生成'},
        {id: '13', name: 'pdf2word', title: '文献PDF内容提取'},
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
    a {
      text-decoration: none;
    }
  }
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
    #tips {
      width: 100px;
    }
    #title {
      font-size: 24px;
      margin-left: 80px;
      flex: 1;
    }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    //text-align: center;
    #title1{
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
</style>
