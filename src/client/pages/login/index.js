/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                            */
/*                                                                            */
/* ************************************************************************** */
import React, { Component, PropTypes } from 'react'
import { autobind } from 'core-decorators'
import { connect } from 'react-redux'
import Helmet from 'react-helmet'
import textStyle from 'lib/css/textField'
import styles from './style.scss'

// import * as loginActions from 'actions/login';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import TouchRipple from 'material-ui/internal/TouchRipple'

class Login extends Component {
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {}
  }

  @autobind
  handleClick() {}
  render() {
    return (
      <div className={styles.root}>
        <Helmet title="Login"/>
        <div className={styles.logobg}>
          <div className={styles.logo}></div>
          <h3>欢迎使用云羲健康</h3>
        </div>
        <form className={styles['form-warper']}>
          <TextField
            hintText="手机号码"
            floatingLabelText="请输入手机号"

            type="tel"
            fullWidth={true}
            className={styles.text}
            style={textStyle.base}
            floatingLabelStyle={textStyle.baseFloatingLabelStyle}
            floatingLabelFocusStyle={textStyle.baseFloatingLabelFocusStyle}
            hintStyle={textStyle.baseHintStyle}
            underlineStyle={textStyle.baseUnderlineStyle}
            inputStyle = {textStyle.baseInputStyle}
            errorStyle={textStyle.baseErrorStyle}
            />
            <TextField
              hintText=""

              floatingLabelText="请输入密码"
              type="password"
              fullWidth={true}
              className={styles.text}
              style={textStyle.base}
              floatingLabelStyle={textStyle.baseFloatingLabelStyle}
              floatingLabelFocusStyle={textStyle.baseFloatingLabelFocusStyle}
              hintStyle={textStyle.baseHintStyle}
              underlineStyle={textStyle.baseUnderlineStyle}
              inputStyle = {textStyle.baseInputStyle}
              errorStyle={textStyle.baseErrorStyle}
              />
            <RaisedButton label="登录"
              className={styles.button}
              style={{
                fontSize: 18  * hotcss.dpr
              }}
              labelStyle={
                {
                  fontSize: 18  * hotcss.dpr
                }
              }
              primary={true}  fullWidth={true} />
            <div className={styles.linkwarper}>
              <a><TouchRipple color='#F48FB1'>用户注册</TouchRipple></a>
            </div>
            <div className={styles.linkright}>
              <a><TouchRipple color='#F48FB1'>忘记密码</TouchRipple></a>
            </div>

        </form>
      </div>
    );
  }
}

const mapActionCreators = {}

const mapStateToProps = (state) => ({counter: state.counter})
export default connect(mapStateToProps, mapActionCreators)(Login)
