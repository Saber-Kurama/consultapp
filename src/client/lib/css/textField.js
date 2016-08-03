// 一些表单的通用样式
const basesize = 18 * hotcss.dpr
const  base = {
  fontSize: basesize,
  lineHeight: 1.5,
  // height: 4.5 * basesize
  height: 3 * basesize
}
const baseFloatingLabelStyle  = {
  lineHeight: 1.25,
  // top: 2.375 * basesize
  top: 1.75 * basesize
}
const flfsSize = 1.75 * basesize
const baseFloatingLabelFocusStyle = {
  transform: `perspective(1px) scale(0.75) translate3d(0px, -${flfsSize}px, 0px)`
}
const baseHintStyle = {
  // bottom: 0.75 * basesize
  lineHeight: 1.25,
  bottom: 0 * basesize
}

const baseUnderlineStyle = {
  // bottom: 0.5 * basesize

  bottom: 0
}

const baseInputStyle = {
  // marginTop: 0.875 * basesize
  height: 1.25 * basesize,
  lineHeight: 1.25,
  marginTop: 1.75 * basesize - 2
}
const baseErrorStyle = {
  fontSize: 0.725 * basesize,
  top: 10 * hotcss.dpr + 'px',
}

export default {
  base,
  baseFloatingLabelStyle,
  baseFloatingLabelFocusStyle,
  baseHintStyle,
  baseUnderlineStyle,
  baseInputStyle,
  baseErrorStyle
}
