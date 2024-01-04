import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className='playerGame mt-5'>
                <div className='theThink'>
                    <img style={{ width: 75, height: 75, marginTop:35, transform: 'rotate(120deg)'}} src='./imgKeoBuaBao/keo.png' alt='./imgKeoBuaBao/bao.png'></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./imgKeoBuaBao/player.png' alt='./imgKeoBuaBao/player.png'></img>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img style={{ width: 50, height: 50 }} src='./imgKeoBuaBao/bao.png' alt='./imgKeoBuaBao/bao.png'></img>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img style={{ width: 50, height: 50 }} src='./imgKeoBuaBao/bua.png' alt='./imgKeoBuaBao/bao.png'></img>
                        </button>
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img style={{ width: 50, height: 50 }} src='./imgKeoBuaBao/keo.png' alt='./imgKeoBuaBao/bao.png'></img>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
