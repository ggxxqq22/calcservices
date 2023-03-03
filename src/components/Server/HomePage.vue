<template>
  <div>
    <el-container>
      <el-aside width="230px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#E9EEF3"
          text-color="#000"
          active-text-color="rgb(16, 78, 91)"
          id="menu"
        >
          <router-link
            :to="'/server/home/' + item.name"
            v-for="item in List"
            :key="item.id"
          >
            <el-menu-item :index="item.id">
              <i class="el-icon-monitor"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      List: [
        { id: 1, title: "数据总览", name: 'main' },
        { id: 2, title: "数据详情", name: 'all' },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  //text-align: center;
  #title1 {
    margin-left: -10px;
  }
  .el-menu-item {
    margin-left: 10px;
  }
}
#menu {
  height: calc(100vh - 64px);
  span {
    font-size: 16px;
    margin-left: 10px;
  }
}
</style>