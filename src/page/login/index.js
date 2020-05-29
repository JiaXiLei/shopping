import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import {NavLink} from 'react-router-dom'
import './css.css'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

export default class index extends Component {
    onFinish = values => {
        console.log('Success:', values);
      };
    
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
    render() {
        return (
            <React.Fragment>
                <div className="top">
                    <p className="top_left"><img src="./返回.png"/></p>
                    <p className="top_cen">会员登录</p>
                    <p className="top_left"></p>
                </div>
                <div className="cen">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="手机号"/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password  placeholder="密码"/>
                        </Form.Item>

                        <Button type="primary" htmlType="submit" danger block>
                            登录
                        </Button>
                    </Form>
                    <div className="cen_bom">
                        <p>
                            <span className="a"><img src="./锁.png"/></span>
                            <span>忘记密码</span>
                        </p>
                        <NavLink to="/zhuce">
                        <p>
                            
                            <span className="a"><img src="./手机.png"/></span>
                            <span>快速注册</span>
                        </p>
                        </NavLink>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
