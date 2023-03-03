<template>
  <div class="main">
    <div class="title">选择一个合适的图表</div>
    <div class="container">
      <div class="card" v-for="item in imgList" @mouseenter="handleMouseEnter(item)" @click="selectChart(item)">
        <img :src="require('@/assets/charts/' + item.name +'.png')" alt="">
      </div>
    </div>
    <div class="tip" :style="`top: ${tipTop}`">
      <h2 class="title">{{ nowChart.title }}</h2>
      <template v-if="nowChart.nickname">
        <h3>别名</h3>
        <div>{{ nowChart.nickname }}</div>
      </template>
      <h3>定义</h3>
      <div class="defi">{{ nowChart.defi }}</div>
      <h3>分析目的</h3>
      <div>{{ nowChart.for }}</div>
      <h3 style="text-decoration: underline; padding-bottom: 2px">数据准备</h3>
      <div class="req" v-html="nowChart.req"></div>
    </div>
  </div>
</template>

<script>
import { chartList } from "@/constant/chartList";

export default {
  name: "chart-list",
  data() {
    return {
      imgList: chartList,
      nowChart: chartList[0],
      tipTop: "60px"
    };
  },
  methods: {
    handleMouseEnter(chart) {
      this.nowChart = chart;
    },
    changeTop(top) {
      this.tipTop = (60 + document.documentElement.scrollTop) + "px";
    },
    selectChart(chart) {
      this.$emit('next', chart)
    }
  },
  mounted() {
    window.addEventListener("scroll", this.changeTop);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeTop)
  }
};
</script>

<style scoped lang="less">
.main {
  padding: 24px;
  position: relative;

  .title {
    font-size: 24px;
    line-height: 33px;
    font-weight: 400;
    color: rgba(0, 0, 0, .65);
  }

  .container {
    width: 846px;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card {
    width: 263px;
    height: 163px;
    border: 2px solid transparent;
    box-shadow: 0 0 5px 0 #dcdade;
    margin-bottom: 20px;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      box-shadow: 0 1px 6px 0 #409EFF;
    }

    img {
      width: 100%;
    }
  }

  .tip {
    width: 280px;
    position: absolute;
    left: 906px;
    background: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 13%);
    border-radius: 4px;
    padding: 24px;
    color: rgba(0, 0, 0, .65);
    line-height: 1.5;

    .title {
      margin-bottom: 18px;
      font-size: 16px;
      line-height: 22px;
      font-weight: 700;
      color: black;

      &:last-child {
        margin-bottom: 50px;
      }
    }

    h3 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 14px;
      font-weight: 500;
      line-height: 20px;
      color: rgba(0, 0, 0, .85);
    }
  }
}
</style>