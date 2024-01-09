import React, { Component } from 'react'
import { ModelContext } from './_Context/ModelContext'

export default class LikeProfile extends Component {
    render() {
        return (
            <div>
                <ModelContext.Consumer>
                    {(value) => {
                        return <div className="card-body">
                            <button className='btn' style={{ border: '1px solid blue', color: 'blue' }} onClick={()=>{value.setLike()}}>Like <i className="fa fa-thumbs-up"></i></button>
                        </div>
                    }}
                </ModelContext.Consumer>
            </div>
        )
    }
}
