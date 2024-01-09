import React, { Component } from 'react'
import ProfileStories from './ProfileStories'
import StoriesList from './StoriesList'
import ExStoriesStateProvider from '../_Provider/ExStoriesStateProvider'

export default class ExcontextStoriesList extends Component {
    render() {
        return (
            <ExStoriesStateProvider>
                <div className='container mt-5'>
                    <h2 className='display-4 text-center'>DANH SÁCH TRUYỆN</h2>
                    <ProfileStories />
                    <StoriesList />
                </div>
            </ExStoriesStateProvider>
        )
    }
}
