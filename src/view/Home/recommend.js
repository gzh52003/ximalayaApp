import React from 'react'
import './index.css'

class Recom extends React.Component {

    render() {
        // 父组件 通讯,根据 传递的 data 的值 进行渲染
        const { data: { data, LikeChange }
        } = this.props
        return (
            <div className='maybelike'>
                <div className='liketitle'>
                    <span style={{ float: "left" }}>猜你喜欢</span>
                    <a style={{ float: "right", fontSize: 11 }}>更多</a>
                </div>
                <div className='like-content'>
                    {
                        data.map(item => (
                            <div key={item._id} className='like-item'>
                                <div className='likeimg'>
                                    <img src={item.cover} className='likeimg-img' />
                                </div>
                                <div className='like-title'>
                                    <span>{item.title}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='changnext' onClick={LikeChange}>
                    换一批
                </div>
            </div>
        )
    }
}

export default Recom