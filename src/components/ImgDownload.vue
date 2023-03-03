<template>
<div class="main">
  <div class="title">导出内容</div>
  <div class="config">
    <el-input v-model="name" class="name-input"></el-input>
    <el-button type="primary" plain class="btn" @click="download">导出</el-button>
    <br>
    <el-radio v-model="type" label=".png">.png</el-radio>
    <el-radio v-model="type" label=".jpg">.jpg</el-radio>
  </div>
  <div class="export-box">
    <img :src="imgLink" class="img">
  </div>
</div>
</template>

<script>
export default {
  name: "ImgDownload",
  props: ['imgLink'],
  data() {
    return {
      name: 'undefined',
      type: '.png'
    };
  },
  methods: {
    download() {
      const aLink = document.createElement('a')
      aLink.style.display = 'none'
      aLink.href = this.imgLink
      aLink.download = this.name + this.type
      document.body.appendChild(aLink)
      aLink.click()
      document.body.removeChild(aLink)
      this.$notify({
        title: '成功',
        message: '图片导出成功',
        duration: 5000
      });
    }
  }
};
</script>

<style scoped lang="less">
.main {
  padding: 24px;
  .title {
    font-size: 24px;
    line-height: 33px;
    font-weight: 400;
    color: rgba(0, 0, 0, .65);
  }
}
.export-box {
  background: #fff;
  box-shadow: 0 0 5px 0 #dcdade;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 10%;
  width: 50%;
  min-height: 400px;
  position: relative;
  padding: 0 24px 24px;
  position: relative;
  display: flex;
}
.img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
}
.name-input {
  margin: 20px 0 10px;
  width: 250px;
}
.btn {
  margin-left: 30px;
}
.config {
  margin-left: 10%;
}
</style>