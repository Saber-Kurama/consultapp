import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import css from 'react-css-modules'
import styles from './style.scss'

import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu

@css(styles)
class Sidebar extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <aside>
        <Menu style={{
          width: 240
        }} mode="inline">
          <SubMenu key="sub1" title={<span><Icon type="user"/> <span> 用户管理 </span></span>} >
            <Menu.Item key="1"><Link to="/patient">患者管理</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/expertAndDoctor" style={{color:"red"}}>专家医生管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span> <Icon type="message"/> <span> 消息管理 </span></span>}>
            <Menu.Item key="3"><Link to="/wechatMsg">微信消息管理</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/shortMsg">短信消息管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={< span > <Icon type="customerservice"/> < span > 诊中 < /span></span >}>
            <Menu.Item key="5"><Link to="/consultCenter">会诊中心管理</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/consult" style={{color:"red"}}>会诊管理</Link></Menu.Item>
            <Menu.Item key="7"><Link to="/order">订单管理</Link></Menu.Item>
            <Menu.Item key="8"><Link to="/withdraw">提现管理</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={< span > <Icon type="customerservice"/> < span > 诊前 < /span></span >}>
            <Menu.Item key="9"><Link to="/booking" style={{color:"red"}}>预约管理</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/onlineConsult" style={{color:"red"}}>在线会诊</Link></Menu.Item>
            <Menu.Item key="11"><Link to="/returnVisit">回访记录</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    )
  }
}
export default Sidebar
