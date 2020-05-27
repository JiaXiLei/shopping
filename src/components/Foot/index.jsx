import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'antd'
import './style.less'

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1776960_e8w45rhzggi.js',
})

export default class Foot extends Component {
  render() {
    return (
      <div className="foot-bar">
        <ul>
          <li>
            <NavLink to='/home/list'>
              <IconFont type="iconshouye" className="icon" />
              首页
            </NavLink>
          </li>
          <li>
            <NavLink to='/home/cart'>
              <IconFont type="icongouwuche" className="icon" id="cart"/>
              购物车
            </NavLink>
          </li>
          <li>
            <NavLink to='/home/mine'>
              <IconFont type="iconiconfuzhi" className="icon" />
              我的
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
