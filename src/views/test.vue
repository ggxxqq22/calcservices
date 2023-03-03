<template>
  <div>
    <el-upload
      class="upload-block"
      drag
      action=""
      :auto-upload="false"
      :on-change="handleChange"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
    <el-button type="success" @click="upload">上传服务器</el-button>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "test",
  data() {
    return {
      fileList: []
    };
  },
  methods: {
    handleChange() {
      console.log("file change!!");
    },
    upload() {
      const url = "http://127.0.0.1:8889/uploadFile/" + moment().format();
      const formData = new FormData();
      this.fileList.forEach((item) => {
        formData.append("file", item.raw);
      });
      formData.append("name", "gxq");
      formData.append("email", "我啊好的哦i哇还不对哦挖好吧对哦我i啊好吧到哪哦i@qq.com");
      formData.append("detail", "detail...");
      formData.append("title", "阿丹博纳");
      this.$http.post(url, formData).then(res => {
        const d = res.data;
        alert(d.msg);
      });
    }
  }
};
</script>

<style scoped>

</style>