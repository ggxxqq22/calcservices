<template>
<div class="tip">
  <i class="el-icon-question" @mouseover="hoverenter" @mouseleave="hoverleave"></i>
  <div class="tip_box" v-if="hover">
    <div class="text">{{ text }}</div>
    <div v-for="(item, index) in imgSrc" :key="index">
      <img :src="item" alt="" class="tip_img">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "tip",
  props: {
    text: {
      type: String
    },
    imgSrc: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      hover: false,
      timer: null
    }
  },
  methods: {
    hoverleave() {
      this.timer = setTimeout(()=>{
        this.hover = false
        this.timer = null
      }, 500)
    },
    hoverenter() {
      if(this.timer){
        clearTimeout(this.timer)
      }
      this.hover = true
    }
  }
};
</script>

<style scoped>
.el-icon-question {
  color: gray;
  cursor: pointer;
}
.tip {
  position: relative;
}
.tip_box {
  position: absolute;
  top: 16px;
  left: 16px;
  padding: 10px;
  font-size: 14px;
  width: 360px;
  border-radius: 8px;
  box-shadow: -3px 3px 6px #93989A;
  z-index: 2000;
  background-color: #fff;
  /*background-color: rgba(0,0,0, 0.2);*/
  color: #666666;
}
.text {
  line-height: 24px;
  text-indent: 1.5em;
}
.tip_img {
  width: 340px;
  margin: 5px;
}
</style>