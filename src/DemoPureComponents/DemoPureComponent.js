import React, { Component } from 'react'
import Profile from './Profile'
export default class DemoPureComponent extends Component {

  state = {
    like: 0
  }

  likeImage = () => {
    let likeHienTai = this.state.like + 1;
    this.setState({
      like: likeHienTai
    })
  }

  render() {
    return (
      <div className='container'>
        <h3 className='text-center display-4'>Tiêu điểm nhân vật</h3>
        <Profile like = {this.state.like}/>
        <br></br>
        <div className="card text-left bg-default">
          <h3 className='ml-4' style={{color: 'pink'}}>Lượt thích ({this.state.like})</h3>
          <div className="card-body">
            <button className='btn' style={{border: '1px solid blue', color: 'blue'}} onClick={()=>{this.likeImage()}}>Like <i className="fa fa-thumbs-up"></i></button>
          </div>
        </div>
      </div>
    )
  }
}
