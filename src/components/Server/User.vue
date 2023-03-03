<template>
  <div id="container">
    <div id="box">
      <h2 id="title">资源\场地申请</h2>
      <div id="content">
        <span>姓名:</span>
        <el-input v-model="input" placeholder="请输入姓名" id="name"></el-input>
      </div>
      <div id="content">
        <span>申请项:</span>
        <el-select v-model="sel" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div id="content">
        <span>邮箱:</span>
        <el-input placeholder="请输入邮箱" v-model="email"></el-input>
      </div>
      <div id="content">
        <span>原因:</span>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4 }"
          placeholder="请输入内容"
          v-model="reason"
        >
        </el-input>
      </div>
      <el-button type="success" @click="open" id="item">提交申请</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      password: '',
      email: '',
      options: [
        { value: '场地申请', label: '场地申请' },
        { value: '资源申请', label: '资源申请' }
      ],
      sel: '',
      reason: ''
    }
  },
  methods: {
    open() {
      this.$alert('请耐心等待审核结果与回复邮件', '提交成功', {
        confirmButtonText: '确定'
      })
    }
  }
}
</script>

<style lang="less" scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  background-color: #ddd;
  #box {
    position: relative;
    width: 600px;
    border-radius: 15px;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    margin-top: -150px;
    #title {
      margin: 40px auto -30px;
    }
    #content {
      margin: 70px auto 0;
      width: 50%;
      display: flex;
      align-items: center;
      span {
        width: 100px;
      }
    }
    #item {
      width: 30%;
      margin: 80px auto;
      text-align: center;
    }
  }
}
</style>
