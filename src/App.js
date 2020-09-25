import React, { Suspense, lazy } from 'react';
import {  Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { TabBar,DatePicker } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import Home from './view/Home'
// const Home = lazy(() => import('./view/Home'))
const Found = lazy(() => import('./view/Found'))
const Listen = lazy(() => import('./view/Listen'))
const Mine = lazy(() => import('./view/Mine'))
const Login = lazy(()=>import('./view/Login'))
const Reg = lazy(()=>import('./view/Reg'))

class App extends React.Component {
   state={
     selectedTab:'iconfont .icon-home',
     hidden:false,
     fullScreen:true,
     menu:[
       {
         text:'主页',
         name:'Home',
         path:'/home',
         icon:'iconfont icon-home'
       },{
         text:'我听',
         name:'Listen',
         path:'/listen',
         icon:'iconfont icon-yanjizhushou-shangchuan_tingtong'
       },
       {
         text:'发现',
         name:'Found',
         path:'/found',
         icon:'iconfont icon-faxian'
       },
       {
         text:'我的',
         name:'Mine',
         path:'/mine',
         icon:'iconfont icon-wode'
       }
     ]
   }

   render(){
     const {menu} =this.state
     return(
       <div>
         <div style={this.state.fullScreen ? { position:"fixed",height: '60px', width: '100%',bottom:0,zIndex:9991 } : { height: 400 }}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            tabBarPosition="bottom"
            font-size='18'
          >
            {
              menu.map(item => <TabBar.Item
                title={item.text}
                key={item.name}
                icon={
                <span className={item.icon} style={{fontSize:28}}></span>
                }
                selectedIcon={
                  <span className={item.icon} style={{fontSize:28}}></span>
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
            <Route path='/home' component={Home} />
            <Route path='/found' component={Found} />
            <Route path='/listen' component={Listen} />
            <Route path='/mine' component={Mine} />
            <Route path='/login' component={Login} />
            <Route path='/reg' component={Reg} />
            <Redirect from='/' to='/home' exact />
            <Redirect to='./notfound' />
          </Switch>
        </Suspense>
       </div>
     )
   }
}

App =withRouter(App)
// function App() {
//   return (
//     // <div className="App">
//     <TabBarExample />
//     // </div>
//   );
// }

export default App;
