<template>
  <div>
    <section class="title">
      <h2>计算社会科学中心数据集共享平台</h2>
      <p>
        CSS数据集共享平台依托云数据中心和基础网络设施，通过图形化的界面实现分布的、异构的、跨网络的各人员和部门之间的数据的交互共享，实现统一平台与各个方面的数据资源共享。按平台步骤发布的数据集可以选择集中到数据中心平台，也可以由数据拥有者自己保存，数据共享平台将统一标准向外提供数据的资源分布情况，使数据不再是私有的个人的，而是可复用的信息资源服务。
      </p>
      <p>
        目前已有的功能：发布共享数据集、浏览公开数据集目录、与数据集作者取得联系、发布待清洗数据集任务等等~
      </p>
    </section>

    <section class="router-container">
      <router-link to="/dataset/page"
        ><el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="@/assets/list.png" class="image" />
          <div style="padding: 14px 0; text-align: center">
            <span>数据集目录</span>
          </div>
        </el-card></router-link
      >
      <router-link to="/dataset/pub"
        ><el-card :body-style="{ padding: '0px' }" shadow="always">
          <img src="@/assets/pub.png" class="image" />
          <div style="padding: 14px 0; text-align: center">
            <span>发布数据集</span>
          </div>
        </el-card></router-link
      >
    </section>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
::v-deep .el-card {
  width: 300px;
}
.router-container {
  width: 1040px;
  margin: 0 auto 100px;
  display: flex;
  justify-content: space-around;
}
.title {
  width: 1040px;
  margin: 80px auto;
  h2 {
    font-weight: 600;
    text-align: center;
    font-size: 28px;
    margin-bottom: 20px;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    margin-bottom: 10px;
    line-height: 36px;
  }
}
</style>

<style lang="less" scoped>
.image {
  width: 100%;
  height: 240px;
  display: block;
}
</style>
