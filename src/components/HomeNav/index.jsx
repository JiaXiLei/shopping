import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776960_ou7g78x9zuq.js',
})

export default class HomeNav extends Component {
  render() {
    return (
      <div className="com-home">
        <div className="com-home-left">
          <IconFont type="iconcategory" className="icon" />
        </div>
        <div className="com-home-cen">
          <input type="text" className="input"/>
        </div>
        <div className="com-home-rig">登录</div>
      </div>
    )
  }
}
