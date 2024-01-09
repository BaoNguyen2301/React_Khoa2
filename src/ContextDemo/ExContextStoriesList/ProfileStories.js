import React, { Component } from 'react'
import { ExStoriesListContext } from '../_Context/ExStoriesListContext'

export default class ProfileStories extends Component {
    render() {
        return (
            <ExStoriesListContext.Consumer>
                {(value) => {
                    let activeStory = value.StoriesListState.find(story => story.active === true)
                    return <div>
                        <div className="card text-left bg-dark text-white" style={{ width: 200 }}>
                            <img style={{ width: 200, height: 250 }} className="card-img-top" src={activeStory.img} alt={activeStory.img} />
                            <div className="card-body">
                                <h4 className="card-title">{activeStory.name}</h4>
                                <p>Lượt thích ({activeStory.like}) <i className="fa fa-thumbs-up text-primary"></i></p>
                            </div>
                        </div>
                    </div>
                }}
            </ExStoriesListContext.Consumer>
        )
    }
}
