<template>
  <div id="container">
    <h2 id="title">数据详情页面</h2>
    <el-select v-model="value" placeholder="请选择服务器" id="select">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>
    <div id="info">
      <div id="box">
        gpu1
        <div id="chart1" style="width: 400px; height: 400px"></div>
        <el-progress
          :percentage="p1"
          :color="customColor"
          :format="format"
        ></el-progress>
      </div>
      <div id="box">
        gpu2
        <div id="chart2" style="width: 400px; height: 400px"></div>
        <el-progress
          :percentage="p2"
          :color="customColor"
          :format="format"
        ></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      options: [
        {
          value: "5",
          label: "5号机",
        },
        {
          value: "11",
          label: "11号机",
        },
        {
          value: "12",
          label: "12号机",
        },
        {
          value: "14",
          label: "14号机",
        },
        {
          value: "15",
          label: "15号机",
        },
        {
          value: "16",
          label: "16号机",
        },
      ],
      value: "5",
      customColor: [
        { color: "green", percentage: 60 },
        { color: "red", percentage: 100 },
      ],
      p1: 50,
      p2: 40
    };
  },
  methods: {
    initfirst(id, v) {
      let name = "chart" + id;
      let myChart = echarts.init(document.getElementById(name));
      myChart.setOption({
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        series: [
          {
            name: "Pressure",
            type: "gauge",
            detail: {
              formatter: "{value}%",
            },
            data: [
              {
                value: v,
                name: "GPU使用率",
              },
            ],
          },
        ],
      });
    },
    format(percentage) {
      return percentage + "°C";
    },
  },
  mounted() {
    this.initfirst(1, 60);
    this.initfirst(2, 40);
  },
  watch: {
    value : function() {
        this.p1 = Math.floor(Math.random() * 70) + 20
        this.p2 = Math.floor(Math.random() * 70) + 20
        this.initfirst(1, Math.floor(Math.random() * 70));
        this.initfirst(2, Math.floor(Math.random() * 70));
    }
  }
};
</script>

<style lang="less" scoped>
#container {
  position: relative;
  margin: 20px 60px 50px;
  #title {
    margin-bottom: 50px;
  }
  #select {
    width: 180px;
  }
  #info {
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    #box {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      padding-top: 40px;
    }
  }
}
</style>