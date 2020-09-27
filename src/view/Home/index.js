import React, { createContext, useEffect, useState } from 'react';
import './index.css'
import { Flex, WhiteSpace, SearchBar, Button, WingBlank, Drawer, List, NavBar, Icon, Grid, Carousel, Tabs, Badge } from 'antd-mobile';
import request from '../../utils/request'
import setimg from '../../img/setimg.png'
import Mycontext from './Mycontext';
import Card from './Card'
import Recom from './recommend'

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);


//header头部
const FlexExample = () => (
  <div>
    <div style={{ background: '#fff' }}>
      <Flex>
        <Flex.Item style={{ width: 100, height: 44, paddingTop: 13, marginLeft: 10 }}>
          {/* <PlaceHolder /> */}
          <img src={require('../..//img/logo.png')} style={{ display: 'Block', width: '100%' }} />
        </Flex.Item>
        <Flex.Item style={{ flex: 3 }}>
          <SearchBar placeholder="Search" maxLength={8} background="#fff" style={{ marginLeft: 30 }} />
          {/* <WhiteSpace /> */}
        </Flex.Item>
        <Flex.Item>
          <Icon type='ellipsis' style={{ marginLeft: 35 }} />
        </Flex.Item>
      </Flex>
      <WhiteSpace size="lg" />
    </div>
  </div>
);


//宫格
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const GridExample = () => (
  <div>
    {/* <div className="sub-title">No border</div> */}
    <Grid data={data} hasLine={false} columnNum={5} />
  </div>
)

//选项卡
const tabs = [
  { title: <Badge >推荐</Badge> },
  { title: <Badge >有声书</Badge> },
  { title: <Badge >相声</Badge> },
  { title: <Badge >音乐</Badge> },
  { title: <Badge >儿童</Badge> },
  { title: <Badge >头条</Badge> },
  { title: <Badge >人文</Badge> },
  { title: <Badge >情感</Badge> },
  { title: <Badge >历史</Badge> },
  { title: <Badge >科技</Badge> },
];


const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        <div className='like-item'>
          <div className='likeimg'>
            <img src={require("../../img/xs1.jpg")} className='likeimg-img' />
          </div>
          <div className='like-title'>
            <span>国色天香 |探险寻宝 盗墓猎奇</span>
          </div>
        </div>
        <div className='like-item'>
          <div className='likeimg'>
            <img src={require("../../img/xs1.jpg")} className='likeimg-img' />
          </div>
          <div className='like-title'>
            <span>国色天香 |探险寻宝 盗墓猎奇</span>
          </div>
        </div>
        <div className='like-item'>
          <div className='likeimg'>
            <img src={require("../../img/xs1.jpg")} className='likeimg-img' />
          </div>
          <div className='like-title'>
            <span>国色天香 |探险寻宝 盗墓猎奇</span>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of second tab
        </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        Content of third tab
        </div>
    </Tabs>
    <WhiteSpace />
  </div>
);
//猜你喜欢



class Home extends React.Component {

  state = {
    dataList: [],
    likeList: []
  }
  // console.log(666)
  async componentDidMount() {

    const { data: dataList } = await request.get("/book", {
      params: {
        page: 1,
        size: 40
      }
    })
    this.setState({
      dataList: this.imgUrl(dataList.data)
    })
    this.LikeChange()
  }
  LikeChange = async () => {
    const { data: likeList } = await request.get("/book", {
      params: {
        page: Math.ceil(Math.random() * 50),
        size: 6
      }
    })
    this.setState({
      likeList: this.imgUrl(likeList.data)
    })
    // console.log(this.state.likeList)
  }
  imgUrl(data = []) {
    const url = "http://localhost:8080/uploads/cover/"
    return data.map(item => {
      item.cover = url + item.cover
      return item
    }
    )
  }
  render() {
    // console.log(this.state.data)
    const { data } = this.state
    return (
      <Mycontext.Provider >
        <FlexExample />
        <TabExample />
        {/* 广告图 */}
        < div style={{ height: 100, width: '100%', marginTop: 10 }}>
          <img src={setimg} style={{ width: '100%', height: '100%' }} />
        </div >
        <GridExample />
        {/* 猜你喜欢 */}

        <Recom data={{ data: this.state.likeList, LikeChange: this.LikeChange }} />

        {/* 列表内容 */}
        <div className='homecontent'>
          <div className="homeitem">
            <div className='homeitem-img'>
              <img src={require("../../img/xs1.jpg")} className='homeimg-img' />
            </div>
            <div className='homeitem-title'>
              <h2>
                抗战时期国民党军队为何会集体在有龙山“集体消失”
              </h2>
              <span>
                古今中外历史上的十万个为什么
              </span>
              <div className='homeitem-list'>
                <div className='itemlist-left'>
                  <span className='homeitem-sort'>十万个为什么</span>
                  <span className='view-counts'>1.15亿</span>
                </div>
                <div className='itemlist-right'>
                  {/* <img className='itemlist-more' src/> */}
                  <Icon type='ellipsis' className='itemlist-most' size='xxs' />
                </div>
              </div>
            </div>
          </div>
          <div className="homeitem">
            <div className='homeitem-img'>
              <img src={require("../../img/xs1.jpg")} className='homeimg-img' />
            </div>
            <div className='homeitem-title'>
              <h2>
                抗战时期国民党军队为何会集体在有龙山“集体消失”
              </h2>
              <span>
                古今中外历史上的十万个为什么
              </span>
              <div className='homeitem-list'>
                <div className='itemlist-left'>
                  <span className='homeitem-sort'>十万个为什么</span>
                  <span className='view-counts'>1.15亿</span>
                </div>
                <div className='itemlist-right'>
                  {/* <img className='itemlist-more' src/> */}
                  <Icon type='ellipsis' className='itemlist-most' size='xxs' />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 身边的人都爱听 */}


        <Card data={this.state.dataList} />
      </Mycontext.Provider >

    )
  }
}

export default Home