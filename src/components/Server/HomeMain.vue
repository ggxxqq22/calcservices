<template>
  <div id="container">
    <h2 id="title">数 据 总 览</h2>
    <div id="box">
      <div id="chart1" style="width: 400px; height: 400px"></div>
      <div id="name">5号机</div>
    </div>
    <div id="box">
      <div id="chart2" style="width: 400px; height: 400px"></div>
      <div id="name">11号机</div>
    </div>
    <div id="box">
      <div id="chart3" style="width: 400px; height: 400px"></div>
      <div id="name">12号机</div>
    </div>
    <div id="box">
      <div id="chart4" style="width: 400px; height: 400px"></div>
      <div id="name">14号机</div>
    </div>
    <div id="box">
      <div id="chart5" style="width: 400px; height: 400px"></div>
      <div id="name">15号机</div>
    </div>
    <div id="box">
      <div id="chart6" style="width: 400px; height: 400px"></div>
      <div id="name">16号机</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  methods: {
    init(id, v) {
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
  },
  mounted() {
    this.init(1, 79);
    this.init(2, 0);
    this.init(3, 21);
    this.init(4, 100);
    this.init(5, 0);
    this.init(6, 100);
  },
};
</script>

<style lang="less" scoped>
#container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  #title {
    position: absolute;
    top: 20px;
    left: 50px;
  }
  #box {
    width: 30%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    #name {
      display: block;
      margin-top: -50px;
      font-size: 20px;
    }
  }
}
</style>