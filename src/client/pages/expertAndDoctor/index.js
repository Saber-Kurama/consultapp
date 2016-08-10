/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                     */
/*                                                                            */
/* ************************************************************************** */
import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {autobind} from 'core-decorators'
import {connect} from 'react-redux'
import * as doctors from 'services/doctor'
import * as actions from 'actions/doctors'
import { doctorsSelector } from 'selectors/doctors'
import Helmet from 'react-helmet'
import styles from './style.scss'

// import { resolve } from 'react-resolver'

// @resolve("doctors", function(props) {
//   // return http.get(`/api/users/${props.params.userId}`);
// })
class ExpertAndDoctor extends Component {
  static defaultProps = {}
  static propTypes = {}
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  @autobind
  handleClick() {}

  handleSelectChange(value) {
    console.log(`selected ${value}`)
  }



  // // 通过 rowSelection 对象表明需要行选择
  // rowSelection = {
  //   onChange(selectedRowKeys, selectedRows) {
  //     console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
  //   },
  //   onSelect(record, selected, selectedRows) {
  //     console.log(record, selected, selectedRows)
  //   },
  //   onSelectAll(selected, selectedRows, changeRows) {
  //     console.log(selected, selectedRows, changeRows)
  //   },
  //   getCheckboxProps: record => ({
  //     disabled: record.name === 'disabled', // 配置无法勾选的列
  //   })
  // }
  //
  //
  // pagination = {
  //   total: this.data.length,
  //   showSizeChanger: true,
  //   onShowSizeChange(current, pageSize) {
  //     console.log('Current: ', current, '; PageSize: ', pageSize)
  //   },
  //   onChange(current) {
  //     console.log('Current: ', current)
  //   }
  // }

  componentWillMount() {}

  componentDidMount() {
    // doctors.getDoctors()
    this.props.fetchDoctors()
  }


  @autobind
  handleSubmit(e) {
    this.props.fetchDoctors()
    e.preventDefault()
  }
  // componentWillReceiveProps(){
  //   console.log('什么时候被调用呢？？？？？？')
  // }

  render() {
    console.log('asdasd',this.props.doctors);
    const FormItem = Form.Item
    const Option = Select.Option
    // const {getFieldProps} = this.props.form
    // const rowSelection = this.rowSelection
    // const columns = this.columns
    const data = this.props.doctors.toJS()
    // const pagination = this.pagination
    console.log('重新')
    return (
      <div className='content-wrapper'>
        <Helmet title="专家医生管理"/>
        <h1>专家医生管理</h1>
        <hr/>

        <div >

        </div>


      </div>
    )
  }
}

// ExpertAndDoctor = Form.create()(ExpertAndDoctor)

const mapActionCreators = {
  fetchDoctors: actions.fetchDoctors
}

const mapStateToProps = (state) => ({
  doctors: doctorsSelector(state)
  // isFetching: state.doctors.get('isFetching')
})
export default connect(mapStateToProps, mapActionCreators)(ExpertAndDoctor)
