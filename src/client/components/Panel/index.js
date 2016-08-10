/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                     */
/*                                                                            */
/* ************************************************************************** */
import React, {Component, PropTypes} from 'react'
import styles from './style.scss'

class Panel extends Component {
  static defaultProps = {}
  static propTypes = {
    title: PropTypes.string
  }
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      loading: false
    }
  }
  render(){
    return (
      <div className={styles.panel}>
        <div className={styles.heading}>
        </div>
        <div className={styles.body}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Panel
