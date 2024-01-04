import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className='playerGame mt-5'>
                <div className='theThink'>
                    <img style={{ width: 75, height: 75, marginTop: 35, transform: 'rotate(120deg)'}} src='./imgKeoBuaBao/bua.png' alt='./imgKeoBuaBao/bao.png'></img>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 200, height: 200 }} src='./imgKeoBuaBao/playerComputer.png' alt='./imgKeoBuaBao/playerComputer.png'></img>

            </div>
        )
    }
}
