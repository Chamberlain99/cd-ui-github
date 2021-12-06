<template>
  <div class="header_container">
    <div class="titleLeft">
      <div class="el-icon-s-promotion" style="font-size: 30px; padding-left: 13px"></div>
      <div class="webName">ui-view</div>
    </div>
    <div class="routerList">
      <span class="list">首页指南</span>
      <span class="list">组件</span>
      <span class="list">首页</span>
      <span class="list">关于</span>
      <!-- <i class="el-icon-s-promotion"></i> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.header_container {
  height: 60px;
  line-height: 60px;
  width: 1500px;
  color: #fff;
  margin: 0 auto;
  background-color: #2b3231;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .titleLeft {
    width: 200px;
    // height: inherit;
    height: 60px;

    .webIcon {
      width: 140px;
      height: 50px;
      margin-left: 20px;
      // background-color: #77ff;
      font-size: 40px;
    }
    .webName {
      color: #fff;
      font-size: 18px;
      padding-left: 20px;
      display: inline-block;
    }
  }

  .routerList {
    width: 500px;
    height: inherit;
    cursor: pointer;
    .list {
      padding: 0 13px;
      &:hover {
        color: #c7ad8f;
        // border: 1px solid #e4e4e4;
      }
    }
  }
}
</style>
