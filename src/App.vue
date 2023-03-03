<template>
  <div id="app">
    <div>
      <template>
        <router-view></router-view>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {
    test() {
      if () {
        console.log(this.$router);
        console.log(this.$router);
      }

    }
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: content-box;

  a {
    text-decoration: none;
  }
}
</style>
