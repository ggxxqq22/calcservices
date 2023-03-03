<template>
  <div class="main">
    <el-steps :active="activeStep" simple>
      <el-step title="选择图表"></el-step>
      <el-step title="上传数据"></el-step>
      <el-step title="配置图表"></el-step>
      <el-step title="导出图表"></el-step>
    </el-steps>
    <div class="clickHolder">
      <div class="stepHolder" @click="activeStep = 1"></div>
      <div class="stepHolder" @click="activeStep = 2"></div>
      <div class="stepHolder" @click="activeStep = 3"></div>
      <div class="stepHolder" @click="activeStep = 4"></div>
    </div>
    <chart-list v-if="activeStep === 1" @next="goNext"></chart-list>
    <upload-data v-if="activeStep === 2" :chart="chart" @next="uploadData"></upload-data>
    <edit-chart v-if="activeStep === 3" :chartObj="chartObj" @next="goToDownload"></edit-chart>
    <img-download v-if="activeStep === 4" :imgLink="link"></img-download>
  </div>
</template>

<script>
import uploadData from "@/components/uploadData";
import chartList from "@/components/chart-list";
import editChart from "@/components/editChart";
import ImgDownload from "@/components/ImgDownload";
export default {
  name: "ChartClub",
  components: {
    uploadData,
    chartList,
    editChart,
    ImgDownload
  },
  data() {
    return {
      activeStep: 1,
      chart: {},
      chartObj: {},
      link: ''
    };
  },
  methods: {
    goNext(chart) {
      this.chart = chart
      this.activeStep++
    },
    uploadData(res) {
      this.chartObj = res
      this.activeStep++
    },
    goToDownload(link) {
      this.link = link
      this.activeStep++
    }
  }
};
</script>

<style scoped lang="less">
.main {
  position: relative;
}
.el-step {
  margin-top: 10px;
}
.clickHolder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 56px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  .stepHolder {
    flex-basis: 25%;
  }
}
</style>