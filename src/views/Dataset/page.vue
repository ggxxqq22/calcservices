<template>
  <div class="main">
    <h2 class="title" style="text-align: center; margin-top: 40px;">数据集共享平台列表</h2>
    <el-select v-model="selectedTag" filterable clearable placeholder="可根据标签搜索数据集" class="selecte">
      <el-option
        v-for="item in tags"
        :key="item"
        :label="item"
        :value="item">
      </el-option>
    </el-select>
    <section class="dataset-list">
      <el-card class="card" v-for="(item, index) in nowList" :key="index">
        <div slot="header" class="clearfix">
          <div class="header">
            <span>{{ item.name }}</span>
            <div class="towash-tag" v-if="item.isClean === '0'">待清洗任务</div>
            <div class="public-type-tag" v-if="item.type === '0'">公开</div>
            <div class="no-public-type-tag" v-if="item.type === '1'">非公开</div>
            <el-button class="btn" type="text" @click="handleClick(item)"
            >查看详情
            </el-button
            >
          </div>
        </div>
        <div class="item">数据集简介：</div>
        <div class="text item" style="padding-left: 20px">{{ item.intro || "暂无简介" }}</div>
        <div class="item">联系方式：</div>
        <div class="text item" style="padding-left: 20px">{{ item.person + item.email == '' ?  "暂无联系方式" : item.person + item.email }}</div>
        <template v-if="item.link !== ''">
          <div class="item">数据集相关链接:</div>
          <el-link type="primary" style="padding-left: 20px" :href="item.link" target="_blank">{{ item.linkName }}</el-link>
        </template>
        <div class="tag-container">
          <div class="tag" v-for="tag in item.tag" :key="tag">{{ tag }}</div>
        </div>
      </el-card>
    </section>
    <div class="contact" v-if="true">
      <div class="title">联系我们</div>
      <div class="divide"></div>
      <img src="@/assets/zjucss.png" class="logo" />
      <p class="loc">地址</p>
      <p class="loc_detail">浙江大学紫金港校区公共管理学院一楼 杭州市余杭塘路866号</p>
      <p class="email">邮箱</p>
      <p class="email_detail">zjucss@zju.edu.cn</p>
      <p class="wechat">微信公众号</p>
      <img src="@/assets/wechat.png" class="wechat_detail" alt="">
    </div>
    <el-pagination
      v-if="!selectedTag"
      background
      layout="prev, pager, next"
      hide-on-single-page
      class="page"
      :current-page.sync="pageNum"
      :total="list.length">
    </el-pagination>
    <el-dialog title="数据集详情" :visible.sync="DialogVisible" width="50%">
      <div class="dialog-header">
        <div class="dialog-title">{{ nowItem.name }}</div>
        <div class="towash-tag" v-if="nowItem.isClean === 0">待清洗任务</div>
        <div class="public-type-tag" v-if="nowItem.type === 0">公开</div>
        <div class="no-public-type-tag" v-if="nowItem.type === 1">非公开</div>
      </div>
      <div class="dialog-desc">{{ nowItem.desc || "暂无简介~~" }}</div>
      <div class="dialog-email">联系方式：{{ nowItem.person + nowItem.email == '' ?  "暂无联系方式" : nowItem.person + nowItem.email }}</div>
      <div class="dialog-center">
        <el-button type="primary" @click="download" v-if="nowItem.file_name !== '暂无文件'">下载文件</el-button>
        <a :href="href" class="a-email"
        >邮件联系<i class="el-icon-s-promotion"></i
        ></a>
      </div>
      <img src="@/assets/pic.png" alt="" class="dialog-img" />
      <div class="dialog-tag-container">
        <div class="tag" v-for="tag in nowItem.tags" :key="tag">{{ tag }}</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      DialogVisible: false,
      pageNum: 1,
      list: [],
      nowItem: {},
      selectedTag: ''
    };
  },
  mounted() {
    let dataList = []
    this.$http.get('getList').then(res => {
      dataList = res.data
      dataList.forEach(item => {
        let form = JSON.parse(item[2]).info
        form = JSON.parse(form).form
        form['file_name'] = JSON.parse(item[2]).file_name
        form['new_file_name'] = JSON.parse(item[2]).new_file_name
        this.list.push(form)
      })
    })
  },
  methods: {
    handleClick(item) {
      this.nowItem = item;
      this.DialogVisible = true;
    },
    download() {
      axios({
        responseType: 'arraybuffer',
        method: 'POST',
        url: 'http://120.27.210.217:8025/downloadData',
        data: {
          new_file_name: this.nowItem.new_file_name,
        }
      }).then(resp => {
        const blob = new Blob([resp.data])
        const link = document.createElement('a')
        link.download = this.nowItem.file_name // a标签添加属性
        link.style.display = 'none'
        link.href = URL.createObjectURL(blob)
        document.body.appendChild(link)
        link.click() // 执行下载
        URL.revokeObjectURL(link.href)  // 释放 bolb 对象
        document.body.removeChild(link) // 下载完成移除元素
      })
    }
  },
  //style="background-image: url("https://images.unsplash.com/photo-1528413538163-0e0d91129480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"); background-color: rgb(125, 185, 222);"
  computed: {
    href() {
      let res = "mailto:";
      if (this.nowItem.email) {
        res += this.nowItem.email;
      }
      res += `?subject=${this.nowItem.name}数据集申请`;
      return res;
    },
    nowList() {
      if(this.selectedTag === '') {
        return this.list.slice((this.pageNum - 1) * 10, this.pageNum * 10);
      } else {
        return this.list.filter(item => item.tag.includes(this.selectedTag))
      }
    },
    tags() {
      const set = new Set();
      this.list.forEach(item => {
        const tags = item.tag || [];
        tags.forEach(i => {
          set.add(i);
        });
      });
      return Array.from(set);
    },
    titles() {
      const set = new Set()
      this.lists.forEach(item => {
        set.add(item.title)
      })
      return set
    }
  }
};
</script>

<style lang="less" scoped>
.selecte {
  position: absolute;
  top: 5px;
  right: 50px;
  width: 300px;
}
.main {
  padding-bottom: 50px;
  position: relative;
}

.page {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.contact {
  position: absolute;
  top: 144px;
  left: 1167px;
  width: 250px;
  height: 591px;
  border-radius: 15px;
  background-color: #fff;
  padding-right: 15px;

  .title {
    color: #010101;
    margin: 24px 0 24px 24px;
    font-size: 18px;
  }

  .divide {
    border: 1px solid #F3F3F3;
  }

  .logo {
    width: 105px;
    height: 24px;
    margin: 33px 0 0 24px;
  }

  .loc, .email, .wechat {
    font-size: 16px;
    color: #010101;
    margin-top: 16px;
    margin-left: 24px;
  }

  .loc_detail, .email_detail {
    font-size: 14px;
    color: #93989A;
    margin-top: 10px;
    margin-left: 24px;
  }

  .wechat_detail {
    width: 220px;
    height: 218px;
    margin: 16px auto;
    display: block;
  }
}

.card {
  width: 480px;
  min-height: 280px;
  padding-bottom: 50px;
  margin: 10px;
  position: relative;

  .header {
    display: flex;
    align-items: center;

    .btn {
      flex: 1;
      text-align: right;
    }
  }

  .desc {
    height: 40px;
    overflow: hidden;
    display: -webkit-box; //必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。
    -webkit-box-orient: vertical; //必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。
    -webkit-line-clamp: 2;
  }

  .email {
    font-weight: 500;
  }

  .tag-container {
    display: flex;
    position: absolute;
    bottom: 25px;

    .tag {
      min-width: 60px;
      height: 20px;
      padding-left: 8px;
      position: relative;
      font-size: 12px;
      line-height: 20px;
      background-color: lightgray;
      text-align: center;
      border-radius: 10px;
      margin-right: 10px;

      &::before {
        content: 'o';
        color: gray;
        position: absolute;
        top: 0;
        left: 5px;
      }
    }
  }
}

.text {
  font-size: 14px;
}

.no-public-type-tag {
  width: 43px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: skyblue;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}

.public-type-tag {
  width: 43px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: greenyellow;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}

.towash-tag {
  width: 65px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  background-color: orange;
  text-align: center;
  border-radius: 4px;
  margin-left: 10px;
}

.item {
  margin-bottom: 18px;
}

.title {
  margin-top: 20px;
  margin-left: 20px;
  font-size: 20px;
}

.dataset-list {
  width: 1040px;
  margin: 20px 80px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.dialog-header {
  margin-top: -20px;
  display: flex;

  .dialog-title {
    font-weight: 500;
  }
}

.dialog-desc {
  margin: 15px 0;
}

.dialog-email {
  margin: 15px 0;
  font-weight: 400;
}

.dialog-center {
  margin: 30px 0;
  display: flex;

  .a-email {
    display: block;
    width: 100px;
    height: 40px;
    text-align: center;
    margin-left: 20px;
    line-height: 40px;
    border-radius: 4px;
    color: white;
    font-size: 14px;
    background-color: #67c441;
  }
}

.dialog-img {
  margin: 20px;
  width: 100px;
}

.dialog-tag-container {
  display: flex;
  margin-top: 20px;

  .tag {
    width: 60px;
    height: 20px;
    padding-left: 8px;
    position: relative;
    font-size: 12px;
    line-height: 20px;
    background-color: lightgray;
    text-align: center;
    border-radius: 10px;
    margin-right: 10px;

    &::before {
      content: 'o';
      color: gray;
      position: absolute;
      top: 0;
      left: 5px;
    }
  }
}
</style>
