import React, { Suspense, lazy } from 'react'
import {  Route, Redirect, Switch, withRouter } from 'react-router-dom'
import './App.css';
import 'antd-mobile/dist/antd-mobile.css'
import { DatePicker } from 'antd-mobile';
import { TabBar } from 'antd-mobile';
import Recommend from './view/Recommend'
const Classify = lazy(() => import('./view/Classify'))
const Collect = lazy(() => import('./view/Collect'))
const Menus = lazy(() => import('./view/Menu'))
const Video = lazy(() => import('./view/Video'))
const Login=lazy(()=>import('./view/Login'))
const Reg=lazy(()=>import('./view/Reg'))
class App extends React.PureComponent {
  state = {
    selectedTab: 'iconfont icon-tuijian1',
    hidden: false,
    fullScreen: true,
    menu: [
      {
        text: '推荐',
        name: 'recommend',
        path: '/recommend',
        icon: 'iconfont icon-tuijian1'
      }, {
        text: '视频',
        name: 'video',
        path: '/video',
        icon: 'iconfont icon-shipin'
      }, {
        text: '分类',
        name: 'classify',
        path: '/classify',
        icon: 'iconfont icon-ziyuan'
      },
      {
        text: '菜单',
        name: 'menus',
        path: '/menus',
        icon: 'iconfont icon-A'
      },
      {
        text: '收藏',
        name: 'collect',
        path: '/collect',
        icon: 'iconfont icon-shoucang'
      }
    ]
  }
  render() {
    const { menu } = this.state
    return (
      <div>
        <div style={this.state.fullScreen ? { position:"fixed",height: '50px', width: '100%',bottom:0,zIndex:9991 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
          >
            {
              menu.map(item => <TabBar.Item
                title={item.text}
                key={item.name}
                icon={
                <span className={item.icon}></span>
                }
                selectedIcon={
                  <span className={item.icon}></span>
                }
                selected={this.state.selectedTab === item.icon}
                onPress={() => {
                  this.setState({
                    selectedTab: item.icon,
                  });
                  this.props.history.push(item.path);
                }}
                data-seed="logId"
              >
              </TabBar.Item>)
            }
          </TabBar>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <Switch>
            <Route path='/recommend' component={Recommend} />
            <Route path='/classify' component={Classify} />
            <Route path='/video' component={Video} />
            <Route path='/menus' component={Menus} />
            <Route path='/collect' component={Collect} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Redirect from='/' to='/recommend' exact />
            <Redirect to='./notfound' />
          </Switch>
        </Suspense>
      </div>
    )
  }
}
App = withRouter(App)
export default App;
