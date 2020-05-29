import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './page/login/index'
import Zhuce from './page/zhuce/index'
import './rem.js'
import './reset.css'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/zhuce" component={Zhuce}/>
        <Route path="/" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
