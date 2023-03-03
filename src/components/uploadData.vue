<template>
  <div class="main">
    <div class="title">数据准备</div>
    <section class="action">
<!--      <div class="step">-->
<!--        <div class="step-title">选择数据源</div>-->
<!--        <div class="radios">-->
<!--          <el-radio v-model="source" label="1">样例数据</el-radio>-->
<!--          <el-radio v-model="source" label="2">本地数据</el-radio>-->
<!--        </div>-->
<!--      </div>-->
      <input type="file" accept=".json,.csv,.xlsx,.xls" style="display: none;" class="uploadInput">
      <button v-show="source === '1'" class="upload-btn" @click="uploadFile">文件上传<i class="el-icon-upload2"></i>
      </button>
<!--      <el-select v-model="exampleData" placeholder="请选择" v-show="source === '1'" class="data-selcet">-->
<!--        <el-option-->
<!--          v-for="item in dataList"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value">-->
<!--        </el-option>-->
<!--      </el-select>-->
      <div class="step">
        <div class="step-title">数据预览</div>
        <div class="box">
          <div class="tip">
            <i class="el-icon-warning-outline"></i>
            <!--            <span>仅支持 .csv、.excel、.json 格式，以表格形式展现</span>-->
            <span>仅支持 .csv格式，以表格形式展现</span>
          </div>
          <div class="example">
            <img v-if="!file" width="100%"
                 src="https://gw.alipayobjects.com/zos/basement_prod/fe4b3cac-c181-4aa8-a267-37b2fea9fe85.svg" alt="">
            <el-table
              v-else
              :data="tableData"
              height="400"
              border
              style="width: 100%">
              <el-table-column
                v-for="item in dataHead"
                :fixed="item === ' '"
                :prop="item"
                :label="item"
                width="120">
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </section>
    <section class="req">
        <div class="req-title">数据需求:</div>
        <div class="req-text" v-html="chart.req"></div>
    </section>
    <el-button type="primary" plain class="next" :disabled="canNext" @click="next">下一步</el-button>
  </div>
</template>

<script>
export default {
  name: "uploadData",
  props: ['chart'],
  data() {
    return {
      source: "1",
      file: null,
      exampleData: 1,
      dataList: [
        { value: 1, label: "示例1" },
        { value: 2, label: "示例2" }
      ],
      selectedData: null,
      dataHead: [],
      row: 0,
      tableData: [],
      canNext: false
    };
  },
  methods: {
    uploadFile() {
      const input = document.querySelector(".uploadInput");
      input.value = "";
      input.click();
    },
    isValid(data) {
      console.log(data);
      const row = data.length - 1;
      const col = data[0].length;
      //结构校验(数据没有空)
      for (let i = 1; i <= row; i++) {
        for (let j = 0; j < col; j++) {
          if (!data[i][j]) return false;
        }
      }
      //列头不能重复
      const head = data[0];
      const set = new Set(head);
      if (set.size !== head.length) return false;
      //根据图表校验
      if(col !== this.chart.test.length) return false
      this.chart.test.forEach((rule, index) => {
        const colArr = [];
        for (let i = 1; i <= row; i++) {
          colArr.push(data[i][index]);
        }
        switch (rule) {
          case "sort":
            try {
              const testArr = colArr;
              testArr.sort();
              console.log(testArr);
            } catch (e) {
              console.log("排序错误");
              return false;
            }
            break;
          case "number":
            for (let i = 0; i < row; i++) {
              if (isNaN(parseFloat(colArr[i]))) {
                console.log("数值格式错误");
                return false;
              }
              colArr[i] = Number(colArr[i])
            }
            console.log('data:::::', data)
            colArr.forEach((item,ind) => {
              data[ind+1][index] = item
            })
            console.log(data)
            break;
          default:
            break;
        }
      });
      this.$message({
        message: '数据上传成功',
        type: 'success'
      });
      return true;
    },
    next() {
      console.log(this.tableData);
      const chartData = Array.from(this.tableData).map(item => {
        delete item.index
        return item
      })
      const res = {
        chartData,
        dataHead: this.dataHead,
        chartType: this.chart.name
      }
      this.$emit('next', res)
    }
  },
  mounted() {
    document.querySelector(".uploadInput").addEventListener("change", (e) => {
      this.file = e.target.files[0];
    });
  },
  watch: {
    file(val) {
      const fileReader = new FileReader();
      fileReader.readAsText(val);
      const _this = this;
      fileReader.onload = function() {
        //处理换行符
        let data = this.result.split("\r\n");
        if(data.length === 1) {
          data = this.result.split('\n')
        }
        if(data.length === 1) {
          data = thjis.result.split('\r')
        }
        //根据逗号分割数据
        data = data.map(item => item.split(","));
        //删除最后的空行
        if(data[data.length - 1].length === 1 && data[data.length - 1][0] === '') data.pop()

        if (!_this.isValid(data)) {
          _this.$message.error('格式错误，请检查数据结构');
          return;
        }
        console.log(data);
        _this.row = data.length - 1;
        _this.dataHead = data[0];
        _this.dataHead.unshift("index");
        let res = [];
        for (let i = 1; i <= _this.row; i++) {
          let tem = {};
          _this.dataHead.forEach((col, index) => {
            if (col === "index") {
              tem.index = i;
            } else {
              tem[col] = data[i][index - 1];
            }
          });
          res.push(tem);
        }
        _this.tableData = res;
        this.canNext = true;
      };
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
  .req {
    margin-top: 30px;
    display: flex;
    .req-title {
      width: 16.66666667%;
      font-size: 14px;
    }
    .req-text {
      font-size: 14px;
      line-height: 24px;
    }
  }
  .step {
    display: flex;
    margin-top: 16px;

    .step-title {
      width: 16.66666667%;
      font-size: 14px;
    }

    .box {
      border: 1px solid #e8e8e8;
      width: 670px;
      font-size: 14px;
      border-radius: 2px;
      background-color: #fff;

      .tip {
        color: rgba(0, 0, 0, .65);
        text-align: center;
        height: 35px;
        line-height: 35px;
        border-bottom: 1px solid #e8e8e8;

        i {
          margin-right: 2px;
        }
      }

      .example {
        padding: 12px;
      }
    }
  }

  .upload-btn {
    margin-top: 15px;
    margin-left: 16.66666%;
    width: 346px;
    height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, .1);
    cursor: pointer;
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    line-height: 30px;

    .el-icon-upload2 {
      margin-left: 5px;
    }

    &:hover {
      border: 1px solid #409EFF;
      color: #409EFF;
    }
  }

  .data-selcet {
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 16.66666%;
    width: 346px;
    height: 30px !important;
  }

  .next {
    margin-top: 50px;
    margin-left: 16.667%;
  }
}
</style>