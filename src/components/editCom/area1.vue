<template>
  <div class="edit">
    <el-form class="form" :model="form" label-width="80px">
      <el-form-item label="画布大小">
        <el-col :span="9">
          <el-input v-model="form.width" size="mini"></el-input>
        </el-col>
        <el-col :span="2" style="text-align: center">
          ~
        </el-col>
        <el-col :span="9">
          <el-input v-model="form.height" class="input" size="mini"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="圆滑曲线">
        <el-switch v-model="form.smooth"></el-switch>
      </el-form-item>
      <el-form-item label="线宽">
        <el-input v-model="form.lineWidth" size="mini" style="width: 60px"></el-input>
      </el-form-item>
      <el-form-item label="曲线颜色">
        <input type="color" v-model="form.color"></input>
      </el-form-item>
      <el-form-item label="显示点">
        <el-checkbox label="" v-model="form.point"></el-checkbox>
      </el-form-item>
      <el-form-item label="显示标签">
        <el-checkbox label="" v-model="form.label"></el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "area1",
  props: ['upFrom'],
  data() {
    return {
      form: {
        width: 0,
        height: 0,
        smooth: false,
        point: false,
        label: false,
        lineWidth: 2,
        color: '#5B8FF9'
      },
      chart: null
    };
  },
  mounted() {
    this.form.width = this.$parent.$el.querySelector('.container').clientWidth * 0.9
    this.form.height = this.$parent.$el.querySelector('.container').clientHeight * 0.9
  },
  watch: {
    form: {
      deep: true,
      handler(newVal, oldVal) {
        this.$emit('update', this.form)
      }
    }
  }
};
</script>

<style scoped lang="less">
.edit {
  width: 266px;
  background-color: #fff;
  padding-top: 60px;
  z-index: 2;
  box-shadow: 0px 5px 3px gray;
  .form {

  }
}
</style>