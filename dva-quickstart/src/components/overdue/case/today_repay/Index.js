/**
 * Created by ziyu on 2017/7/26.
 */
import React, { Component,  } from 'react'
import Common from '../Today_repay'
class Index extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
  }
  render () {
    return (
      <Common collectionType='0' isNewAdd='0' api='/collection/today_repay/list' />
    )
  }
}

export default Index
