import React, { Component } from 'react'
import { ModelContext } from '../_Context/ModelContext'

export default class ModelStateProvider extends Component {

    state ={
        like: 0
    }

    setLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    //Tu context su dung Provider de chia se state cho cac Children
    render() {
        return (
            <ModelContext.Provider value = {{stateLike: this.state.like, setLike: this.setLike}}>
                {this.props.children}
            </ModelContext.Provider>
        )
    }
}
