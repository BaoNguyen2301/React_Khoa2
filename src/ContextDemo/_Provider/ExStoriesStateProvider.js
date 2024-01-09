import React, { Component } from 'react'
import { ExStoriesListContext } from '../_Context/ExStoriesListContext'
import DataStoriesList from '../../Data/dataModel.json'
export default class ExStoriesStateProvider extends Component {

    state = {
        StoriesListState: DataStoriesList
    }

    setActive = (id) => {
        let StoriesListUpdate = this.state.StoriesListState.map((story, index)=>{
            if(story.id === id){
                story.like += 1;
                story.active = true;
            }else{
                story.active = false;
            }
            return {...story}
        })
        this.setState({
            StoriesListState: StoriesListUpdate
        })
    }


    render() {
        return (
            <ExStoriesListContext.Provider value = {{StoriesListState: this.state.StoriesListState, setActive: this.setActive}}>
                {this.props.children}
            </ExStoriesListContext.Provider>
        )
    }
}
