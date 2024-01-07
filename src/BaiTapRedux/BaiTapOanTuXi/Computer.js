import React, { Component } from 'react'
import { connect } from 'react-redux'
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            
            50% {top: 100px;}
           
            100% {top: 0;}
          }`
        return (
            <div className='playerGame mt-5'>
                <style>{keyframe}</style>
                <div className='theThink'style={{position: 'relative'}}>
                    <img style={{ width: 75, height: 75, marginTop: 35, transform: 'rotate(120deg)',position: 'absolute',animation: `randomItem${Date.now()} 1s`, right: 35}} src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./imgKeoBuaBao/playerComputer.png' alt='./imgKeoBuaBao/playerComputer.png'></img>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        computer: state.BaiTapGameOanTuXiReducer.computer
    }
}

export default connect (mapStateToProps) (Computer)
