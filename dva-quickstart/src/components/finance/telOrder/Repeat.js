/**
 * Created by ziyu on 2017/7/27.
 */
import React, { Component, PropTypes } from 'react'
import Common from '../common/Index'
class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <Common stepType='telOrderRepeat' isNewAdd='1' processNode='2' getListApi='/audit/auditing/query' />
    )
  }
}

export default Index