/**
 * Created by ziyu on 2017/7/27.
 */
import React, { Component } from "react";
import Common from "../common/OrderViewIndex";
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Common stepType="passOrder" getListApi="/audit/pass/list" />;
  }
}

export default Index;
