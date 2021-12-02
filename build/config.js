
/**
 * @description 创建build/config.js文件设置 webpack 公共配置信息
 */
var path = require('path');

//js忽略路径
exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'me-ui': path.resolve(__dirname, '../'),
};