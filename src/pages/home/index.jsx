import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import HomeNav from '@@/HomeNav'
import { homeNav } from '@/actions/home'
import './style.less'

export default @connect(({ home }) => ({
  homeImg: home.homeImg
}), {
  homeNav
})
class Home extends Component {

  componentDidMount () {
    this.props.homeNav()
  }

  render() {
    const { homeImg } = this.props
    return (
      <div className="pages-home">
          <HomeNav />
          <div className="pages-home-bot">
            <Carousel autoplay={true}>
              {
                homeImg.map(ele => {
                  return (
                      <div>
                        <img src={ele.image} alt="" className="imgs"/>
                      </div>
                  
                  )
                })
              }  
            </Carousel>          
          </div>
      </div>
    )
  }
}
