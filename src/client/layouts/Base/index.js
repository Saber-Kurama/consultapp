import React, { Component, PropTypes } from 'react'
import styles from './style.scss'
import Header from './Header'
import Sidebar from './Sidebar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import QueueAnim  from 'rc-queue-anim'


class Base extends Component {
  static propTypes = {

  }
  //{children}
  render() {
    const { children } = this.props
    // styles={headerStyle}
    const animationName = 'rag-fadeIn'
    const key = Math.random()
    return (
      <div className={styles.Root}>
        <Header />
        <div className={styles.Main}>
          <div className={styles.Left}>
          <Sidebar />
          </div>
          <div className={styles.Right}>
            <QueueAnim type={['right', 'left']} className={styles.routemain}>
              {React.cloneElement(this.props.children , { key })}
            </QueueAnim>
          </div>
        </div>
      </div>
    )
  }
}
export default Base
