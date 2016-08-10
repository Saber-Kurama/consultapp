import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import css from 'react-css-modules'
import styles from './style.scss'
import logo from './logo.png'


import { Menu, Dropdown, Icon } from 'antd'

const MenuItem = Menu.Item

@css(styles)
class Header extends Component {
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // const {children} = this.props
    // styles={headerStyle}
    let SubMenu = Menu.SubMenu
    let MenuItemGroup = Menu.ItemGroup
    let menu=(
        <Menu style={{width:'150px'}}>
          <Menu.Item key="0"><Icon type="info-circle-o"/> 个人信息</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1"><Icon type="book"/> 计划任务</Menu.Item>
          <Menu.Divider />
          <Menu.Item key="2"><Icon type="logout"/> 退出登录</Menu.Item>
        </Menu>
    )

    return (
      <header className={`${styles.Header} clearfix`}>
        <div className={styles.Logo}>
          <img src={logo} alt="logo" />
        </div>
        <h2><Link to="/">云羲会诊管理平台</Link></h2>
        <Menu mode="horizontal" selectedKeys={['home']}>

          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="javascript:void(0)">
            当前用户 <Icon type="down" />
            </a>
          </Dropdown>
        </Menu>
      </header>
    )
  }
}
export default Header
