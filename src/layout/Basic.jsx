import React, { Component } from 'react'
import { Switch, Route, Redirect }  from 'react-router-dom'
import { Home, Cart, Mine } from '@/router/assembly'
import Foot from '@@/Foot'
import './style.less'

export default class Basic extends Component {
  render() {
    return (
      <div className="basic">
        <div className="top">
          <Switch>
            <Route path="/home/list" component={Home}/>
            <Route path="/home/cart" component={Cart}/>
            <Route path="/home/mine" component={Mine}/>
            <Redirect to="/home/list" />
          </Switch>
        </div>
        <div className="bot">
            <Foot />
        </div>
      </div>
    )
  }
}
