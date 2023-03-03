<template>
  <el-container id="app-container">
    <el-header id="header" height="64px">
      <img src="@/assets/zjucss.png" id="main-logo" />
      <div id="title">CSS在线数据处理平台</div>
<!--      <router-link :to="{ path : '/dataset' }">-->
<!--        <div id="tips">数据集目录系统</div>-->
<!--      </router-link>-->
    </el-header>
    <el-container class="main-container">
      <el-aside width="266px" class="aside">
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          background-color="#E9EEF3"
          text-color="#000"
          active-text-color="rgb(16, 78, 91)"
          id="menu"
        >
          <el-collapse v-model="activeNames" accordion>
            <el-collapse-item title="机器学习方法" name="1">
              <template
                v-for="item in firstList"
              >
                <el-menu-item :index="item.id" :key="item.id" @click="goToPage(item.name)">
                  <i class="el-icon-s-data"></i>
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </el-collapse-item>
            <el-collapse-item title="数据分析工具" name="2">
              <template
                v-for="item in secondList"
              >
                <el-menu-item :index="item.id" :key="item.id" @click="goToPage(item.name)">
                  <i class="el-icon-document"></i>
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </el-collapse-item>
            <el-collapse-item title="可视化工具" name="3">
              <template
                v-for="item in thirdList"
              >
                <el-menu-item :index="item.id" :key="item.id" @click="goToPage(item.name)">
                  <i class="el-icon-pie-chart"></i>
                  <span slot="title">{{ item.title }}</span>
                </el-menu-item>
              </template>
            </el-collapse-item>
          </el-collapse>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <component :is="curComponent" :info="info"></component>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import HomePage from "@/components/HomePage";
import calcCom from "@/components/calcCom";
import ChartClub from "@/components/ChartClub";
import R from "@/views/R";
export default {
  components: {
    HomePage,
    calcCom,
    ChartClub,
    R
  },
  data() {
    return {
      firstList: [
        { id: "1", name: "kmeans", title: "kmeans聚类" },
        { id: "2", name: "decisionTree", title: "决策树" },
        { id: "3", name: "randomForest", title: "随机森林" },
        { id: "4", name: "svm", title: "SVM" },
        { id: "5", name: "svr", title: "SVR" },
        { id: "6", name: "linearRegression", title: "多元线性回归" },
        { id: "7", name: "logisticRegression", title: "逻辑回归" },
        { id: "8", name: "pca", title: "PCA降维" },
        { id: "9", name: "TSNE", title: "t-SNE降维" },
      ],
      secondList: [
        { id: "10", name: "Ttest", title: "单样本T检验" },
        { id: "11", name: "ploydata", title: "插值法处理缺失值" },
        { id: "12", name: "wordCloud", title: "词云生成" },
        { id: "13", name: "getFreqWord", title: "文本关键词提取" },
        { id: "14", name: "getFreq", title: "文本词频统计"},
        { id: "15", name: "getSenti", title: "文本情感分析" },
        { id: "16", name: "mic", title: "MIC分析" }
        // { id: "18", name: "dtw", title: "dtw分析"}
      ],
      thirdList: [
        { id: "17", name: "chart", title: "在线图表" },
        { id: "18", name: "ronline", title: "在线R语言" }
      ],
      info: {
        name: "kmeans"
      },
      activeNames: ['1'],
      curComponent: 'calcCom'
    };
  },
  methods: {
    goToPage(name) {
      if(name === 'chart') {
        this.curComponent = 'ChartClub'
      } else if(name === 'ronline') {
        this.curComponent = 'R'
      } else {
        this.curComponent = 'calcCom'
        this.info.name = name;
      }
    }
  }
};
</script>

<style lang="less" scoped>
#app-container {
  width: 100%;
}
.main-container {
  height: calc(100vh - 64px);
}
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
    width: 140px;
    color: #67c441;
  }
  #title {
    font-size: 14px;
    margin-left: 210px;
    flex: 1;
  }
}
.aside {
  height: calc(100vh - 64px);
}
#menu {
  height: 100%;

  span {
    font-size: 18px;
    margin-left: 10px;
    color: #93989A;
  }

  #title1 {
    margin-left: -10px !important;

    ::v-deep span {
      font-size: 18px;
      color: #010101;
      font-weight: 600;
    }
  }
  .el-collapse-item {
    padding-left: 7px;
  }
}

::v-deep .el-aside .el-menu {
  background-color: #FFF !important;
  border-right: 1px solid #F3F3F3;

  .el-menu-item {
    background-color: #FFF !important;
    margin: 2px 20px 2px 10px !important;
    border-radius: 8px;
    height: 48px;
    line-height: 48px;
    &.is-active {
      background-color: rgba(16, 78, 91, 0.1) !important;
      span {
        color: #104E5B !important;
      }
    }
  }
}

.el-main {
  background-color: #f8f8f8;
  min-height: calc(100vh - 64px);
  color: #333;
  padding: 0 0;
}
</style>