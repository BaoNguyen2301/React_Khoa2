import React, { Component } from 'react'
import StoriesItem from './StoriesItem'
import { ExStoriesListContext } from '../_Context/ExStoriesListContext'

export default class StoriesList extends Component {
    render() {
        return (
            <ExStoriesListContext.Consumer>
                {(value) => {
                    return <div>
                        <h3>Tổng hợp truyện Nhĩ Căn</h3>
                        <div className='container'>
                            <div className='row'>
                                {value.StoriesListState.map((story, index) => {
                                    return <div className='col-3' key={index}>
                                       <StoriesItem StoriesItem = {story} setActive = {this.setActive}/>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                }}
            </ExStoriesListContext.Consumer>
        )
    }
}
