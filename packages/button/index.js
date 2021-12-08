/**
 *  @todo :封装组件BUTTON
 *  @time :2021-12-7
 *  @description 创建 packages/loading/index.js 文件。使用 install 方法来全局注册该组件，安装组件通过全局方法 Vue.use() 即可
 *
 */

/* eslint-disable no-unused-vars */
import Button from './src/index'

// 插件应该暴露一个 install 方法
// 第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
Button.install = function (Vue, options) {
  Vue.component(Button.name, Button) //使用component注册组件
}

// 默认导出组件
export default Button
