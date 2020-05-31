import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd'
import HomeNav from '@@/HomeNav'
import HomeList from '@@/HomeList'
import HomeGoods from '@@/HomeGoods'
import { homeNav, homeLists, homegood } from '@/actions/home'
import './style.less'

export default @connect(({ home }) => ({
  homeImg: home.homeImg,
  homeListData: home.homeListData,
  homeGoodsData: home.homeGoodsData
}), {
  homeNav,
  homeLists,
  homegood
})
class Home extends Component {
   
  state = {
    name: ''
  }

  componentDidMount () {
    const { homeNav, homeLists, homegood } = this.props
    homeNav()
    homeLists()
    homegood()
  }

  onScroll = () => {
    const contentTop = document.querySelector('.pages-home-bot')
    
    if( contentTop.scrollTop >= 150 ) {
        this.setState({
          name: 'liner'
        })
    } else {
        this.setState({
          name: 'com-home'
        })
    }
    
  }

  render() {
    const { homeImg, homeListData, homeGoodsData } = this.props
    const { name } = this.state
    return (
      <div className="pages-home">
          <HomeNav name={name}/>
          <div className="pages-home-bot" onScroll={this.onScroll}>
            <Carousel autoplay={true}>
              {
                homeImg.map((ele, index) => {
                  return (
                      <div key={index}>
                        <img src={ele.image} alt="" className="imgs"/>
                      </div>
                  )
                })
              }  
            </Carousel>   
            <HomeList homeListData={homeListData}/> 
            {
              homeGoodsData.map((ele, index) => {
                return <HomeGoods homeGoodsData={ele} key={index}/>
              })
            } 
          </div>
      </div>
    )
  }
}
