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
      <el-form-item label="选定标签">
        <el-select v-model="form.selectedLabel" placeholder="请选择标签" style="width: 100px">
          <el-option v-for="(item, index) in options" :label="item" :value="index" :key="index"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="曲线颜色">
        <input type="color" v-model="form.color[form.selectedLabel]"></input>
      </el-form-item>
      <el-form-item label="显示标签">
        <el-checkbox label="" v-model="form.label"></el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "col4",
  props: ['upFrom', 'chartObj'],
  data() {
    return {
      form: {
        width: 0,
        height: 0,
        smooth: false,
        point: false,
        selectedLabel: 0,
        label: false,
        lineWidth: 2,
        color: ['#5B8FF9','#5AD8A6']
      }
    };
  },
  mounted() {
    this.form.width = this.$parent.$el.querySelector('.container').clientWidth * 0.9
    this.form.height = this.$parent.$el.querySelector('.container').clientHeight * 0.9
  },
  computed: {
    options() {
      const typeLabel = this.chartObj.dataHead[2]
      const res = []
      this.chartObj.chartData.forEach(item => {
        if(!res.includes(item[typeLabel])) res.push(item[typeLabel])
      })
      return res
    }
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