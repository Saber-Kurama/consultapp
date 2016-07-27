import mapObj from 'map-obj'
import resolve from './resolve'

// 执行一遍 resolve 对象
/*
 * 生成 类似
 * {
 *  root: '/',
 *  src: '/src'
 * }
 * 上面应该是绝对路径
 */
const rootSiblings = mapObj(resolve, (k, v) => [k, v('')])
/**
 * 生成 一些路径的配置
 *
 */
export default {
  ...rootSiblings, // root, (bin, src, dist)(dirs 中的)

  client: resolve.src('client'),

  // public: resolve.dist('public'),
  //
  // scripts: resolve.src('scripts'),
  styles: resolve.assets('styles'),
  // templates: resolve.src('templates'),
  //
  // // 资产的路径
  // assets: {
  //   root: resolve.src('assets'),
  //   fonts: resolve.src('assets/fonts'),
  //   icons: resolve.src('assets/icons'),
  //   images: resolve.src('assets/images')
  // },

  // lcov: resolve.coverage('*/lcov.info'),
  // eslintrc: resolve.root('.eslintrc'),
  // stylelintConfig: resolve.root('stylelint.config.js'),
  // karmaConfig: resolve.root('karma.conf.js'),
}
