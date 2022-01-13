<template>
  <div class="homepage">
    <img src="../assets/images/homepagePic.png" alt="" />
    <div class="homepage_title">面向个人开发者vue-UI组件库</div>
    <div class="navBox">
      <div class="navBox1" @click="startUse">开始使用3</div>
      <div class="navBox2">设计体系1</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'helloWorld',
  methods: {
    startUse() {
      this.$router.push('/test')
    },
  },
}
</script>

<style lang="scss" scoped>
.homepage {
  width: 1000px;
  height: 1000px;
  margin: auto;
  position: relative;
  .homepage_title {
    position: absolute;
    top: 100px;
    font-size: 35px;
    left: 0px;
  }
  .navBox {
    position: absolute;
    height: 46px;
    width: 280px;
    // left: 20px;
    top: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navBox1,
    .navBox2 {
      height: 46px;
      line-height: 46px;
      width: 47%;
      text-align: center;
      cursor: pointer;
    }
    .navBox1 {
      background-color: #5e7ce0;
      color: #fff;
    }
    .navBox2 {
      border: 1px solid #5e7ce0;
      color: #5e7ce0;
    }
  }
}
</style>
