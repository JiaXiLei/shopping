import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.less'

export default class HomeList extends Component {
  render() {
    const { homeListData } = this.props
    return (
      <div className="homelist">
        {
          homeListData.map(ele => {
            return (
              <Link to={`/goods/class/${ele.cid}`} className="ddc" key={ele.cid}>
                <dl>
                  <dt><img src={ele.image} alt=""/></dt>
                  <dd>{ele.title}</dd>
                </dl>
              </Link>
            )
          }) 
        }
      </div>
    )
  }
}
