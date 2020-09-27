import React from 'react'
import Mycontext from "./Mycontext"
import './index.css'
import { Icon } from 'antd-mobile';

class Card extends React.Component {

    render() {
        // 父组件 通讯,根据 传递的 data 的值 进行渲染
        const { data } = this.props
        return (
            data.map(item => (
                <div key={item.id} className='homecontent'>
                    <div className="homeitem">
                        <div className='homeitem-img'>
                            <img src={item.cover} className='homeimg-img' />
                        </div>
                        <div className='homeitem-title'>
                            <h2>
                                {item.title}
                            </h2>
                            <span>
                                {item.customTitle}
                            </span>
                            <div className='homeitem-list'>
                                <div className='itemlist-left'>
                                    <span className='homeitem-sort'>{item.anchor}</span>
                                    <span className='view-counts'>{item.playCount}</span>
                                </div>
                                <div className='itemlist-right'>
                                    {/* <img className='itemlist-more' src/> */}
                                    <Icon type='ellipsis' className='itemlist-most' size='xxs' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }
}

export default Card