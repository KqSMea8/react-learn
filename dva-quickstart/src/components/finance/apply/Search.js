import React, { Component } from "react";
import { Form, Button, DatePicker, Icon } from "antd";

const FormItem = Form.Item;
const RangePicker = DatePicker.RangePicker;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        startDate: props.startDate,
        endDate: props.endDate
      }
    };
  }

  changeItem(key, value) {
    this.setState(
      {
        params: {
          ...this.state.params,
          [key]: value
        }
      },
      () => {
        this.props.changeParams(this.state.params);
      }
    );
  }

  changeTime(time) {
    if (typeof time !== "undefined") {
      let startDate = time[0].format("YYYY-MM-DD");
      let endDate = time[1].format("YYYY-MM-DD");
      this.setState(
        {
          params: {
            ...this.state.params,
            startDate,
            endDate
          }
        },
        () => {
          this.props.changeParams(this.state.params);
        }
      );
    }
  }

  handleReset(e) {
    e.preventDefault();
    let values = this.props.form.resetFields();
    this.setState(
      {
        ...values
      },
      () => {
        this.props.changeParams({});
      }
    );
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <Form inline>
        <div>
          <FormItem label="时间范围">
            {getFieldDecorator("time")(
              <RangePicker
                style={{ width: 200 }}
                onChange={e => this.changeTime(e)}
              />
            )}
          </FormItem>

          <FormItem>
            &nbsp;&nbsp;&nbsp;
            <Button type="ghost" onClick={e => this.handleReset(e)}>
              <Icon type="reload" />
            </Button>
            &nbsp;&nbsp;&nbsp;
            <span>
              申请订单数=系统拒绝数+系统审核数+流入人工数&nbsp;&nbsp;&nbsp;流入人工数=人工通过数+人工拒绝数+人工审核数
            </span>
          </FormItem>
        </div>
      </Form>
    );
  }
}

Search = Form.create()(Search);
export default Search;
