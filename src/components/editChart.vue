<template>
  <div class="main">
    <div class="container">
      <div class="wrapper" ref="wrapper" :style="`width: ${form.width}px; height: ${form.height}px`"></div>
    </div>
    <component :up-from="form" @update="update" :is="editCom" :chart-obj="chartObj"></component>
    <button class="next" @click="goNext">
      完成配置，生成图表
      <i class="el-icon-right"></i>
    </button>
  </div>
</template>

<script>
import { myRender } from "@/utils/useRender";
import line1 from "@/components/editCom/line1";
import line2 from "@/components/editCom/line2";
import area1 from "@/components/editCom/area1";
import area2 from "@/components/editCom/area2";
import step1 from "@/components/editCom/step1";
import step2 from "@/components/editCom/step2";
import col1 from "@/components/editCom/col1";
import col2 from "@/components/editCom/col2";
import col3 from "@/components/editCom/col3";
import col4 from "@/components/editCom/col4";
import bar1 from "@/components/editCom/bar1";
import bar2 from "@/components/editCom/bar2";
import bar3 from "@/components/editCom/bar3";
import bar4 from "@/components/editCom/bar4";
import pie from "@/components/editCom/pie";
import cir from "@/components/editCom/cir";
import html2canvas from 'html2canvas'
export default {
  name: "editChart",
  components: {
    line1,
    line2,
    area1,
    area2,
    step1,
    step2,
    col1,
    col2,
    col3,
    col4,
    bar1,
    bar2,
    bar3,
    bar4,
    pie,
    cir
  },
  props: ['chartObj'],
  data() {
    return {
      form: {
        width: 0,
        height: 0
      },
      chart: null
    };
  },
  methods: {
    goNext() {
      const ele = document.querySelector('.wrapper')
      const _this = this
      html2canvas(ele, {
        background: 'white'
      }).then((canvas) => {
        const imgLink = canvas.toDataURL('image/jpeg')
        _this.imgLink = imgLink
        this.$emit('next', imgLink)
      })
    },
    update(form) {
      this.chart.update(form)
      this.form.width = form.width
      this.form.height = form.height
    }
  },
  mounted() {
    this.form.width = document.querySelector('.container').clientWidth * 0.9
    this.form.height = document.querySelector('.container').clientHeight * 0.9
    const ele = document.querySelector('.wrapper')
    console.log(this.chartObj);
    this.chart = myRender(this.chartObj, ele)
  },
  computed: {
    editCom() {
      return this.chartObj.chartType
    }
  }
};
</script>

<style scoped lang="less">
.main {
  display: flex;
  height: calc(100vh - 120px);
}
.container {
  flex: 1;
  background-color: #d8d8d8;
  position: relative;
  z-index: 1;
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 90%;
    height: 90%;
    background-color: #fff;
    margin: auto;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
    border-radius: 3px;
  }
}
.next {
  position: absolute;
  right: 0px;
  bottom: 0px;
  z-index: 3;
  width: 266px;
  height: 48px;
  border-radius: 0;
  background-color: #5ea1fc;
  border-color: #5ea1fc;
  border: 0;
  text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
  cursor: pointer;
  color: white;
}
</style>