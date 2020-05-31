import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Login, Basic, Goods } from './assembly'

export default class Router extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/goods" component={Goods} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Basic} />
          <Route path="/" component={Basic} />
        </Switch>
      </BrowserRouter>
    )
  }
}
