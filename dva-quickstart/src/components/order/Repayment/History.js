import React, { Component } from "react";
import { connect } from "dva";
import { routerRedux } from "dva/router";
import { Modal, Table, Button } from "antd";

@connect(({ repayment }) => ({
  list: repayment.historyList,
  visible: repayment.visible,
  currentKey: repayment.currentKey
}))
export default class RepaymentHistory extends Component {
  state = {};

  componentDidMount() {}
  handleCancel = () => {
    this.props.dispatch({
      type: "repayment/hideModal"
    });
  };
  render() {
    const { list, visible, k, currentKey } = this.props;
    let columns = [
      {
        title: "支付订单号",
        dataIndex: "payNo"
      },
      {
        title: "支付方式",
        dataIndex: "payType"
      },
      {
        title: "支付流水号",
        dataIndex: "payBillNo"
      },
      {
        title: "支付状态",
        dataIndex: "status"
      },
      {
        title: "支付金额",
        dataIndex: "realPayAmount"
      },
      {
        title: "发起支付时间",
        dataIndex: "startDate"
      },
      {
        title: "支付成功时间",
        dataIndex: "successDate"
      }
    ];

    columns.forEach((item, index) => {
      columns[index].width = `${columns.length / 100}%`;
    });
    return (
      <Modal
        title="还款记录"
        visible={k === currentKey && visible}
        onCancel={this.handleCancel}
        footer={null}
        width={800}
      >
        <Table
          style={{ height: 400 }}
          bordered
          scroll={{ y: 280 }}
          rowKey={(record, index) => index}
          dataSource={list}
          columns={columns}
          pagination={{
            pageSize: 20,
            currentPage: 1
          }}
        />
      </Modal>
    );
  }
}
