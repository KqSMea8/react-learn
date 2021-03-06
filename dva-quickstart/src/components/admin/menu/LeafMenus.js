/**
 * Created by yujianfu on 2016/11/17.
 */
import React, { Component } from "react";
import { fetchPost } from "./../../../utils/request";
import { Table } from "antd";
import Styles from "./Index.less";

class LeafMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: null,
      activeParentItem: null,
      activeId: null
    };
  }

  componentWillReceiveProps(props) {
    let activeParentItem = props.activeItem;
    if (activeParentItem != this.state.activeParentItem) {
      this.setState(
        {
          activeParentItem
        },
        () => {
          this.getMenus(activeParentItem.id);
        }
      );
    }
  }

  getMenus(parenId) {
    fetchPost(`/menu/parent/${parenId}/list`, {}).then(json => {
      if (json.data != null) {
        let data = json.data.list;
        this.setState({
          menus: data
        });
      }
    });
  }

  // 单击行
  handleClickRow(record) {
    this.setState(
      {
        activeId: record.id,
        activeParentItem: record
      },
      () => {
        this.props.setHandleItem(record);
      }
    );
  }

  // 单击行 样式改变
  handleChosedRow(itemId) {
    if (itemId == this.state.activeId) {
      return Styles.active;
    } else {
      return "";
    }
  }

  render() {
    const firstColumns = [
      {
        title: "id",
        dataIndex: "id",
        key: "id",
        width: 50
      },
      {
        title: "名称",
        dataIndex: "name",
        key: "name",
        width: 100
      },
      {
        title: "url",
        dataIndex: "url",
        key: "url"
      }
    ];

    return (
      <Table
        pagination={false}
        bordered
        style={{ background: "#FFFFFF" }}
        dataSource={this.state.menus}
        columns={firstColumns}
        onRowClick={record => this.handleClickRow(record)}
        rowClassName={record => this.handleChosedRow(record.id)}
        title={() => "叶子节点"}
        size="small"
      />
    );
  }
}

export default LeafMenus;
