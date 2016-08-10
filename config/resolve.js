/*
 * 路径的转换
 */
 import path from 'path'
 import mapObj from 'map-obj'
 import dirs from './dirs'

 const resolve = path.resolve
 // 项目根路径
 const base = [resolve(__dirname, '..')]

 // 生成一个 生成 resolve 生成器
 const root = (...args) => resolve.apply(resolve, [...base, ...args])

 //
 const entries = mapObj(dirs, (k, v) => [k, root.bind(null, v)])
 /*
  * 最后生成
  * obj.src('img') = root/src/img  root 是指项目根路径
  */
 export default { root, ...entries }
