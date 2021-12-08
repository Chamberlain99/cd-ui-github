<template>
  <div class="header_container">
    <div class="titleLeft" @click="logoClick">
      <div class="el-icon-s-promotion" style="font-size: 30px; padding-left: 13px"></div>
      <div class="webName">ui-view</div>
    </div>
    <div class="routerList">
      <template v-for="(item, index) in titleList">
        <router-link class="list" :key="index" :to="item.title" @click="titleClick(index)" :class="[index == currentIndex ? 'active' : '']">{{
          item.name
        }}</router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data() {
    return {
      titleList: [
        { name: '设计规范', title: 'design' },
        { name: '组件', title: 'test' },
        { name: '关于', title: 'about' },
      ],
      currentIndex: -1,
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
    },
    logoClick() {
      this.$router.push('/')
    },
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
    cursor: pointer;
    width: 200px;
    height: 60px;
    .webIcon {
      width: 140px;
      height: 50px;
      margin-left: 20px;
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
      color: #fff;
      &:hover {
        color: #c7ad8f;
        // text-decoration: underline;
        // border: 1px solid #e4e4e4;
      }
    }
    .active {
      text-decoration: underline;
      color: #c7ad8f;
    }
  }
}
</style>
