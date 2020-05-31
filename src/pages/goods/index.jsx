import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Goodsclass from '@/pages/goodsclass'
import Goodsdetail from '@/pages/goodsdetail'
import './style.less'

export default class Goods extends Component {
  
  render() {
    return (
      <div className="goods">
        <Switch>
        <Route path="/goods/detail/:cid" component={Goodsdetail}/>

          <Route path="/goods/class/:cid" component={Goodsclass}/>
        </Switch>
      </div>
    )
  }
}
