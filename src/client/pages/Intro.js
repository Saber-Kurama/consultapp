import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
// import { DatePicker } from 'antd'
class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <h1>欢迎使用云羲会诊管理平台</h1>

      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

export default connect(mapStateToProps)(Intro)
