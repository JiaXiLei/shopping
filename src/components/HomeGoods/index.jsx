import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.less'

export default class HomeGoods extends Component {
  render() {
    const { homeGoodsData } = this.props
    return (
      <div className="homegoods">
        {
          <p>—— {homeGoodsData.title} ——</p>
        }
        {
          <div className="homegoodstop" >
            {
              homeGoodsData.items.length === 7 ?
              homeGoodsData.items.map((ele, index) => {
                if (index === 0) {
                  return (
                    <div className="homegoodstople" key={ele.gid}>
                      {
                        <Link to={`/goods/detail/${ele.gid}`}  >
                          <h1>{ele.title}</h1>
                          <h3>精品打折 <span className="sp1">{ele.price}</span></h3>
                          <img src={ele.image} alt="" className="img"/>
                        </Link>
                      }
                    </div>
                  )
                } else if ( index === 1 || index === 2 ) {
                  return (
                    <div className="homegoodstopri" key={ele.gid}>
                      {
                        <Link to={`/goods/detail/${ele.gid}`}>
                          <dl>
                            <dd>
                              <h1>{ele.title}</h1>
                              <h3>品质精挑</h3>
                            </dd>
                            <dt><img src={ele.image} alt=""/></dt>
                          </dl>
                        </Link>
                      }
                    </div>
                  )
                } else {                  
                  return (
                    <div className="homegoodstopbo" key={ele.gid}>
                      {
                        <Link to={`/goods/detail/${ele.gid}`}>
                          <h1>{ele.title}</h1>
                          <img src={ele.image} alt=""/>
                        </Link>
                      }
                    </div>
                  )
                }
              })
              : homeGoodsData.items.map((ele, index) => {
                if (index === 0 || index === 1) {
                  return (
                    <div className="mainb" key={ele.gid}>
                      {
                        <Link to={`/goods/detail/${ele.gid}`} >
                          <h1>{ele.title}</h1>
                          <img src={ele.image} alt=""/>
                        </Link>
                      }
                    </div>
                  )
                } else {
                  return (
                    <div className="maina" key={ele.gid}>
                      {
                        <Link to={`/goods/detail/${ele.gid}`}>
                          <h1>{ele.title}</h1>
                          <img src={ele.image} alt=""/>
                        </Link>
                      }
                    </div>
                  )
                }
              })
            }
          </div>
        }
      </div>
    )
  }
}
