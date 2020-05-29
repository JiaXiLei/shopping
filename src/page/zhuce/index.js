import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './css.css'

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="top">
                  <NavLink to='/login'><p className="top_left"><img src="./返回.png"/></p></NavLink>  
                    <p className="top_cen">会员注册</p>
                    <p className="top_left"></p>
                </div>
                <div className="cen">
                    
                </div>
            </React.Fragment>
        )
    }
}
