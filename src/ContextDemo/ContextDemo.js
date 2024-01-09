import React, { Component } from 'react'
import ModelProfile from './ModelProfile'
import LikeProfile from './LikeProfile'
import ModelStateProvider from './_Provider/ModelStateProvider'

export default class ContextDemo extends Component {
    render() {
        return (
            <ModelStateProvider>
                <div className='container mt-5'>
                    <h2 className='display-4 text-center'>TIÊU ĐIỂM NHÂN VẬT</h2>
                    <ModelProfile />
                    <LikeProfile />
                </div>
            </ModelStateProvider>
        )
    }
}
