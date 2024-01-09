import React, { Component } from 'react'
import { ExStoriesListContext } from '../_Context/ExStoriesListContext';

export default class StoriesItem extends Component {
    render() {
        let { StoriesItem } = this.props;
        return (
            <div>
                <div className="card text-left bg-dark text-white" style={{ width: 200 }}>
                    <img style={{ width: 200, height: 250 }} className="card-img-top" src={StoriesItem.img} alt={StoriesItem.img} />
                    <div className="card-body pb-1">
                        <p className="card-title">{StoriesItem.name}</p>
                        <ExStoriesListContext.Consumer>
                            {(value) => {
                                return  <button className='btn text-white' style={{ marginBottom: 5, border: "1px solid blue" }} onClick={() => {value.setActive(StoriesItem.id)}}>{StoriesItem.like} <i className="fa fa-thumbs-up text-primary"></i></button>
                            }}
                        </ExStoriesListContext.Consumer>
                    </div>
                </div>
            </div>



        )
    }
}
