/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                            */
/*                                                                            */
/* ************************************************************************** */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { autobind } from 'core-decorators'
import { connect } from 'react-redux'
import styles from './style.scss'

// import * as <%= camelEntityName%>Actions from 'actions/<%= camelEntityName%>';

class <%= pascalEntityName %> extends Component {
    static defaultProps = {}
    static propTypes = {}
    constructor(props) {
        super(props)
        this.state = {}
    }

    @autobind
    handleClick() {

    }
    render() {
        return (
            <div className={styles['<%= pascalEntityName %>']}>
                <h4><%= pascalEntityName %></h4>
            </div>
        )
    }
}

export default <%= pascalEntityName %>
