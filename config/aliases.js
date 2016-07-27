/**
 *  aliases 别名 简化路径查找
 *
 *  用来配置的 webpack的
 */
import fs from 'fs'

import resolve from './resolve'
import paths from './paths'
// import dependencies from './dependencies';

const client = fs.readdirSync(paths.client)
  .filter((entry) => fs.statSync(resolve.src('client', entry)).isDirectory())
  .reduce((acc, dir) => ((acc[dir] = resolve.src('client', dir)) && acc), {})

export default {
  styles: paths.styles,
  // templates: paths.templates,
  //
  // fonts: paths.assets.fonts,
  // icons: paths.assets.icons,
  // images: paths.assets.images,

  ...client
  // ...dependencies
}
