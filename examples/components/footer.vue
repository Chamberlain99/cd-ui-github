<template>
  <div class="footer_container">
    <img src="../assets/images/footer-banner.png" width="50%" height="60px" alt="" />
    <div class="banner">
      <div class="link">
        <div class="linkBox_title"><span class="greenBox"></span>链接</div>
        <ul class="uls">
          <li class="github_link" @click="openGithub">代码仓库</li>
          <li class="update_log">更新日志</li>
        </ul>
      </div>
      <div class="community"></div>
      <div class="others"></div>
    </div>
    <!-- <div class=""></div> -->
  </div>
</template>

<script>
export default {
  name: 'mainFooter',
  data() {
    return {}
  },
  methods: {
    openGithub() {
      window.open('https://github.com/Chamberlain99')
    },
  },
}
</script>

<style lang="scss" scoped>
.footer_container {
  // width: 1500px;
  margin: 0 auto;
  height: 200px;
  background-color: #5e7ce0;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    z-index: 0;
  }
  .banner {
    position: absolute;
    top: 0;
    left: calc(50% - 750px);
    // margin: 0 auto;
    width: 1500px;
    height: 200px;
    margin-top: 25px;
    // background-color: hotpink;
    display: flex;
    justify-content: center;
    align-items: center;

    .others {
      width: 180px;
      height: inherit;
      // background-color: #7cf;
    }
    .community {
      width: 180px;
      height: inherit;
      // background-color: red;
      margin: 0 30px;
    }
    .link {
      padding-top: 20px;
      width: 180px;
      height: inherit;
      // background-color: #009;
      .linkBox_title {
        height: 30px;
        width: 100%;
        line-height: 30px;
        color: #fff;
        padding-left: 12px;
        .greenBox {
          display: inline-block;
          margin-right: 13px;
          width: 12px;
          height: 12px;
          background-color: #63c2b5;
        }
      }
      .uls {
        width: 100%;
        height: inherit;
        li {
          width: 100%;
          height: 30px;
          color: #fff;
          cursor: pointer;
          &:hover {
            color: #e4e4e4;
            // transform: scale(1.2);
          }
        }
        .github_link {
          color: red;
        }
      }
    }
  }
}
</style>
