<template>
  <div id="app">
    <main-header></main-header>
    <div class="main_container">
      <router-view></router-view>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  /* text-align: center; */
}
#nav {
  padding: 30px;
  /* text-align: center; */
}
a {
  font-weight: bold;
  color: #2c3e50;
}
.router-link-exact-active {
  color: #42b983;
}
.main_container {
  height: 100vh;
  margin: 0 auto;
  width: 1500px;
  background-color: #8877;
}
</style>
