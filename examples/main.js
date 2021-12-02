/* 
 TODO:MAIN.JS
*/
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import CdUI from '../src/index'
import demoBlock from './components/demo-block'
import hljs from 'highlight.js'

import 'highlight.js/styles/stackoverflow-light.css'

Vue.config.productionTip = false
Vue.use(CdUI)
Vue.component('demo-block', demoBlock)

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
