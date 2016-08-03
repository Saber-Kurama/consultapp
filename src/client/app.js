import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { browserHistory } from 'react-router'

import configureStore from 'store/configureStore'
import createRoutes from 'routes/index'
import { Provider } from 'react-redux'
import Immutable from 'immutable'
import each from 'lodash/each'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import 'styles/index.scss'

injectTapEventPlugin()
let reduxState = {}
if (window.__REDUX_STATE__) {
  try {
    let plain = JSON.parse(unescape(__REDUX_STATE__))
    each(plain, (val, key)=> {
      reduxState[key] = Immutable.fromJS(val)
    })
  } catch (e) {
  }
}

const store = configureStore(reduxState)
const muiTheme = getMuiTheme({
  button:{
    height: hotcss.px2rem(80, 750) * hotcss.fontSize
  }
})
ReactDOM.render((
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      {createRoutes(browserHistory)}
    </MuiThemeProvider>
  </Provider>
), document.getElementById('root'))
