// 所有的路径
import paths from './paths'
require('dotenv').load()
// console.log(process.env);
// webpack 包别名
import aliases from './aliases'
import postcss from './postcss'
import globals from './globals'
export default {
  paths,
  aliases,
  postcss,
  globals
}
