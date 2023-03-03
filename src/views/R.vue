<template>
  <div class="frame-box">
    <div class="block">R语言在线工具</div>
    <iframe src="https://c.runoob.com/compile/5649/" width="900" height="770" scrolling="no" class="iframe" frameborder="0"></iframe>
    <div class="hint">工具来源： <a href="https://c.runoob.com/compile/5649/" target="_blank">https://c.runoob.com/compile/5649/</a></div>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style scoped>
.frame-box {
  margin-top: -80px;
  width: 100%;
  position: relative;
  height: 100%;
  background-color: rgb(246, 246, 246);
}
.block {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 2000;
  background-color: rgb(246, 246, 246);
}
.hint {
  font-size: 12px;
  color:666;
  margin-top: -15px;
  margin-left: 16px;
}
</style>