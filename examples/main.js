/* 
 TODO:MAIN.JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import CdUI from '../src/index'
import CdUI from '../lib/me-vue-ui.common'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'
import MainHeader from './components/header.vue'
import MainFooter from './components/footer.vue'

// import style
// import './assets/styles/fonts/style.css'
import 'highlight.js/styles/stackoverflow-light.css'

Vue.config.productionTip = false
Vue.use(CdUI)
Vue.use(ElementUI)

Vue.component('demo-block', demoBlock)
Vue.component('main-header', MainHeader)
Vue.component('main-footer', MainFooter)

router.afterEach(() => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  document.title = 'cd-ui'
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
